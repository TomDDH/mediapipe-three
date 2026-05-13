import { BufferGeometry, WebGLRenderer, PerspectiveCamera, Group, Mesh, CanvasTexture, Vector2, Scene, MathUtils, BufferAttribute, MeshBasicMaterial, SRGBColorSpace, Vector3 } from 'three'
import { FilesetResolver, FaceLandmarker, FaceLandmarkerResult, NormalizedLandmark } from '@mediapipe/tasks-vision'
import indices from './indices.json'
import uvidx from './uv.json'
import occlusion from "./occlusion.json"

class FaceTracker {
  private faceLandmarker: FaceLandmarker | null = null
  public ready: boolean = false
  public faceGroup: Group
  public onLoad: () => void
  private faceGeometry: BufferGeometry
  private positionArray: Float32Array
  public faceMesh: Mesh
  private ratio: number
  private halfH: number
  private halfW: number
  public facingMode: "user" | "environment" = "user";
  private video: HTMLVideoElement
  private canvas: HTMLCanvasElement | OffscreenCanvas
  private bgTexture: CanvasTexture | null = null
  private width: number
  private height: number
  private videoRatio: number = 0
  private upperLid: number[] = [247, 30, 29, 27, 28, 56, 414, 286, 258, 257, 259, 260, 467]
  private learpLid: number[] = [246, 161, 160, 159, 158, 157, 398, 384, 385, 386, 387, 388, 466]
  private tempTransform: Group
  public occlusion: Mesh
  private scene: Scene
  private camera: PerspectiveCamera
  public anchors: {
    head: Group,
    leftEye: Group,
    rightEye: Group
  }

  constructor({
    camera,
    renderer,
    scene,
    forVisionTasksWasmPath = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
    modelAssetPath = `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`
  }: {
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
    scene: Scene,
    forVisionTasksWasmPath?: string,
    modelAssetPath?: string
  }) {

    const size = renderer.getSize(new Vector2())

    this.width = size.x
    this.height = size.y
    this.ratio = this.width / this.height
    this.halfH = Math.tan(MathUtils.degToRad(camera.fov + 3) / 2) // * camera.near;
    this.halfW = this.halfH * this.ratio;
    this.camera = camera

    this.tempTransform = new Group()
    this.faceGroup = new Group()
    this.faceLandmarker = null
    this.anchors = {
      head: new Group(),
      leftEye: new Group(),
      rightEye: new Group(),
    }
    this.faceGroup.add(this.anchors.head)
    this.faceGroup.add(this.anchors.leftEye)
    this.faceGroup.add(this.anchors.rightEye)

    this.positionArray = new Float32Array(468 * 3)
    const positionAttribute = new BufferAttribute(this.positionArray, 3)
    this.faceGeometry = new BufferGeometry();
    this.faceGeometry.setAttribute('position', positionAttribute);

    this.faceGeometry.setIndex(new BufferAttribute(new Uint16Array(indices), 1));
    this.faceGeometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvidx), 2));

    const faceMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    this.faceMesh = new Mesh(this.faceGeometry, faceMaterial);
    this.faceMesh.frustumCulled = false

    this.faceGroup.add(this.faceMesh)

    const occlusionGeometry = new BufferGeometry();
    const occPositionArray = new Float32Array(occlusion.position)
    const occIndexArray = new Uint16Array(occlusion.index)
    occlusionGeometry.setAttribute('position', new BufferAttribute(occPositionArray, 3))
    occlusionGeometry.setIndex(new BufferAttribute(occIndexArray, 1))
    const occlusionMaterial = new MeshBasicMaterial({ color: 0xffff00, colorWrite: true })
    this.occlusion = new Mesh(occlusionGeometry, occlusionMaterial)
    this.occlusion.scale.setScalar(.5)
    this.occlusion.position.set(0, 0.1, -0.35)
    this.occlusion.visible = false
    this.anchors.head.add(this.occlusion)

    this.scene = scene

    this.video = document.createElement("video")
    this.video.style.position = "absolute"
    this.video.style.top = "0"
    this.video.style.left = "0"
    this.video.autoplay = true
    this.video.playsInline = true
    this.video.muted = true
    this.video.style.zIndex = "-100"
    this.video.style.width = "2px"
    document.body.appendChild(this.video)

    this.canvas = document.createElement("canvas")
    this.canvas.width = this.width
    this.canvas.height = this.height

    document.body.appendChild(this.canvas)
    this.canvas.style.position = "absolute"
    this.canvas.style.top = "0"
    this.canvas.style.left = "0"
    this.canvas.style.width = "200px"
    this.canvas.style.zIndex = "101"

    this.onLoad = () => { }

    this.init(forVisionTasksWasmPath, modelAssetPath)
  }

  setSize(width: number, height: number) {
    this.width = width
    this.height = height
    this.ratio = this.width / this.height
    this.halfH = Math.tan(MathUtils.degToRad((this.camera.fov || 60) + 3) / 2)
    this.halfW = this.halfH * this.ratio
    this.canvas.width = this.width
    this.canvas.height = this.height
    if (this.bgTexture) {
      this.bgTexture.dispose()
      this.addBackground()
    }
  }


  addBackground() {
    this.bgTexture = new CanvasTexture(this.canvas as unknown as HTMLCanvasElement)
    this.bgTexture.colorSpace = SRGBColorSpace
    this.scene.background = this.bgTexture
  }

  async startCamera(mode: boolean) {
    try {

      this.video.onloadedmetadata = () => {
        this.videoRatio = this.video.videoWidth / this.video.videoHeight;
        this.addBackground()
      }
      this.facingMode = mode ? "user" : "environment"
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: this.facingMode },
      });
      if (this.video) {
        this.video.srcObject = stream;
      }
    } catch (e) {
      console.error("Camera start error", e)
    }
  }
  async init(forVisionTasksWasmPath: string, modelAssetPath: string) {
    try {
      const vision = await FilesetResolver.forVisionTasks(
        forVisionTasksWasmPath || "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      this.faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: modelAssetPath || `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
          delegate: "GPU"
        },
        outputFaceBlendshapes: false,
        outputFacialTransformationMatrixes: true,
        runningMode: "VIDEO",
        numFaces: 1,
      });
      this.ready = true
      this.onLoad()
    } catch (e) {
      console.error("VisionTask init error", e)
    }
  }

  handleResults(results: FaceLandmarkerResult) {
    if (!results?.faceLandmarks?.length) return
    const landmarks = results.faceLandmarks[0]
    const transformMatrix = results.facialTransformationMatrixes?.[0]
    const m = transformMatrix.data
    this.tempTransform.matrix.fromArray(m)
    this.tempTransform.matrix.decompose(this.tempTransform.position, this.tempTransform.quaternion, this.tempTransform.scale)
    const toLocal = (lm: NormalizedLandmark, target: NormalizedLandmark | null = null) => {
      const vec = new Vector3(
        (lm.x - 0.5) * 2 * this.halfW,
        -(lm.y - 0.5) * 2 * this.halfH,
        -lm.z
      );
      if (target) {
        const targetVec = new Vector3(
          (target.x - 0.5) * 2 * this.halfW,
          -(target.y - 0.5) * 2 * this.halfH,
          -target.z
        );
        vec.lerp(targetVec, 0.6);
      }
      return vec;
    }
    if (m && landmarks) {
      this.tempTransform.matrix.fromArray(m)
      this.tempTransform.matrix.decompose(this.tempTransform.position, this.tempTransform.quaternion, this.tempTransform.scale);
      this.anchors.head.position.copy(this.tempTransform.position)
      this.anchors.head.quaternion.copy(this.tempTransform.quaternion)
      this.anchors.head.scale.setScalar(20 * this.tempTransform.scale.x)
      this.faceGroup.updateMatrix()
      this.faceGroup.updateMatrixWorld(true)
    }

    this.anchors.leftEye.position.copy(toLocal(landmarks[468]))
    this.anchors.rightEye.position.copy(toLocal(landmarks[473]))

    for (let i = 0; i < 468; i++) {
      let target = null
      if (this.upperLid.includes(i)) {
        const learpIndex = this.learpLid[this.upperLid.indexOf(i)]
        target = landmarks[learpIndex]
      }

      const worldPos = toLocal(landmarks[i], target)
      this.faceGroup.worldToLocal(worldPos)

      this.positionArray[i * 3] = worldPos.x
      this.positionArray[i * 3 + 1] = worldPos.y
      this.positionArray[i * 3 + 2] = worldPos.z
    }

    this.faceGeometry.attributes.position.needsUpdate = true
  }
  renderBg() {
    const canvasRatio = this.width / this.height;
    let drawWidth, drawHeight;

    // console.log("videoRatio", this.videoRatio, "canvasRatio", canvasRatio)

    if (canvasRatio > this.videoRatio) {
      drawWidth = this.width
      drawHeight = this.width / this.videoRatio
    } else {
      drawHeight = this.height
      drawWidth = this.height * this.videoRatio
    }

    const ctx = this.canvas.getContext('2d')
    if (ctx) {

      ctx.save();

      if (this.facingMode === 'user') {
        ctx.scale(-1, 1);
        ctx.translate(-this.width, 0);
      }
      ctx.clearRect(0, 0, this.width, this.height)
      ctx.drawImage(this.video, (this.width - drawWidth) / 2, (this.height - drawHeight) / 2, drawWidth, drawHeight)
      ctx.restore();

      if (this.bgTexture) {
        this.bgTexture.needsUpdate = true
      }
    }

  }

  update() {
    if (this.videoRatio) {
      this.renderBg()
    }
    if (!this.ready || !this.faceLandmarker) return
    const time = performance.now()
    const faceLandmarkerResult = this.faceLandmarker.detectForVideo(this.canvas, time);
    this.handleResults(faceLandmarkerResult)

  }

  detect(image: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement): void {
    if (this.videoRatio) {
      this.renderBg()
    }

    if (!this.ready || !this.faceLandmarker || !image) return
    const time = performance.now()
    const faceLandmarkerResult = this.faceLandmarker.detectForVideo(image, time);
    this.handleResults(faceLandmarkerResult)
  }

}

export { FaceTracker }
