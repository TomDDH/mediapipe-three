# mediapipe-three

Three.js integration for MediaPipe face landmark detection. Attach 3D objects to face anchors (head, left eye, right eye) with live camera background rendering.

## Install

```bash
npm install mediapipe-three
```

## Quick Start

```js
import * as THREE from 'three'
import { FaceTracker } from 'mediapipe-three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Create the tracker and add its group to the scene
const faceTracker = new FaceTracker({ camera, renderer, scene })
scene.add(faceTracker.faceGroup)

// Start the webcam (true = front camera, false = rear)
faceTracker.startCamera(true)

function animate() {
  requestAnimationFrame(animate)
  faceTracker.update()     // runs face detection + renders camera background
  renderer.render(scene, camera)
}
animate()
```

## Attaching Objects to the Face

`faceTracker.anchors` exposes three `THREE.Group` nodes that move and rotate with the face every frame:

| Anchor | Description |
|---|---|
| `anchors.head` | Full head transform (position + rotation) |
| `anchors.leftEye` | Left eye position |
| `anchors.rightEye` | Right eye position |

```js
// Add any Three.js object to an anchor
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
const material = new THREE.MeshStandardMaterial({ color: 0xff6600 })
const box = new THREE.Mesh(geometry, material)

faceTracker.anchors.head.add(box)
```

```js
// Add helpers to visualize eye positions
faceTracker.anchors.leftEye.add(new THREE.AxesHelper(0.1))
faceTracker.anchors.rightEye.add(new THREE.AxesHelper(0.1))
```

## Loading a GLTF Model onto the Face

```js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()
loader.load('./mask.glb', (gltf) => {
  faceTracker.anchors.head.add(gltf.scene)
})
```

## Wait for the Model to Load

Use the `onLoad` callback to run code once the MediaPipe model is ready:

```js
faceTracker.onLoad = () => {
  console.log('Face tracker ready')
}
```

Or check the `ready` flag:

```js
if (faceTracker.ready) {
  // safe to call detect()
}
```

## Detect on a Custom Image or Video

Instead of `update()` (which reads from the webcam), use `detect()` to run face detection on any image, video, or canvas element:

```js
function animate() {
  requestAnimationFrame(animate)
  faceTracker.detect(myVideoElement)  // HTMLImageElement | HTMLVideoElement | HTMLCanvasElement
  renderer.render(scene, camera)
}
```

## Occlusion Mesh

A built-in occlusion mesh is available to hide objects that should appear behind the face (e.g. earrings behind the head). It is hidden by default:

```js
faceTracker.occlusion.visible = true
```

## Resize

Call `resize` when the renderer dimensions change:

```js
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  faceTracker.resize(window.innerWidth, window.innerHeight)
})
```

## Constructor Options

```ts
new FaceTracker({
  camera,                   // THREE.PerspectiveCamera  (required)
  renderer,                 // THREE.WebGLRenderer       (required)
  scene,                    // THREE.Scene               (required)
  forVisionTasksWasmPath,   // string — CDN path to MediaPipe WASM (optional)
  modelAssetPath,           // string — path to face_landmarker.task model (optional)
})
```

By default the WASM and model are loaded from the official CDN, so no local files are needed.

## Full Example

```js
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FaceTracker } from 'mediapipe-three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('app').appendChild(renderer.domElement)

const faceTracker = new FaceTracker({ camera, renderer, scene })
scene.add(faceTracker.faceGroup)
faceTracker.startCamera(true)

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dirLight = new THREE.DirectionalLight(0xffffff, 2)
dirLight.position.set(1, 2, 3)
scene.add(dirLight)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  faceTracker.resize(window.innerWidth, window.innerHeight)
})

function animate() {
  requestAnimationFrame(animate)
  faceTracker.update()
  renderer.render(scene, camera)
}
animate()
```

## License

MIT
