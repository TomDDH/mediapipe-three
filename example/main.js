import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FaceTracker } from 'mediapipe-three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


const startButton = document.getElementById('start')
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    init()
})

function init() {



    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 1

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('app').appendChild(renderer.domElement)

    // Second camera + renderer with OrbitControls
    const PIP_W = 400
    const PIP_H = 400 * window.innerHeight / window.innerWidth
    const camera2 = new THREE.PerspectiveCamera(60, PIP_W / PIP_H, 0.1, 1000)
    camera2.position.set(0, 0, 3)

    const renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer2.setSize(PIP_W, PIP_H)
    Object.assign(renderer2.domElement.style, {
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        border: '2px solid rgba(255,255,255,0.4)',
        borderRadius: '8px',
        zIndex: '10',
    })
    document.body.appendChild(renderer2.domElement)



    const controls = new OrbitControls(camera2, renderer2.domElement)
    controls.enableDamping = true

    const faceTracker = new FaceTracker({ camera, renderer, scene })
    scene.add(faceTracker.faceGroup)
    faceTracker.startCamera(true)

    faceTracker.anchors.rightEye.add(new THREE.AxesHelper(0.1))
    faceTracker.anchors.leftEye.add(new THREE.AxesHelper(0.1))
    faceTracker.occlusion.visible = true
    faceTracker.faceMesh.material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const loader = new GLTFLoader()
    loader.load("./occlusion.glb", (gltf) => {
        const mask = gltf.scene
        //   mask.scale.setScalar(0.01)
        // console.log("mask loaded", mask)
        gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                console.log("mesh", child.geometry)
                console.log("mesh", Array.from(child.geometry.attributes.position.array).map(v => parseFloat(v.toFixed(6))))
                console.log("mesh", Array.from(child.geometry.index.array))

                // console.log("mesh", Array.from(child.geometry.attributes.in.array).map(v => parseFloat(v.toFixed(6))))

            }
        })
        //   faceTracker.anchors.head.add(mask)
    })


    scene.add(new THREE.AxesHelper(1))

    const light = new THREE.DirectionalLight(0xffffff, 2)
    light.position.set(1, 2, 3)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        // camera2 is fixed size, no resize needed
    })

    function animate() {
        requestAnimationFrame(animate)
        faceTracker.update()
        // use detect for custom images
        // faceTracker.detect(image|video|canvas)

        renderer.render(scene, camera)
        controls.update()
        renderer2.render(scene, camera2)
    }

    animate()
}