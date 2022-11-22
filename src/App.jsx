import { useState } from "react";
import "./App.css";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { render } from "react-dom";

const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.outputEncoding = THREE.sRGBEncoding;

const fov = 45;
const aspect = 2; // the canvas default
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 10, 20);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 5, 0);
controls.update();

const scene = new THREE.Scene();
scene.background = new THREE.Color("black");

const planeSize = 40;

const loader = new THREE.TextureLoader();
const texture = loader.load(
  "https://threejs.org/manual/examples/resources/images/checker.png"
);
texture.encoding = THREE.sRGBEncoding;
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.magFilter = THREE.NearestFilter;
const repeats = planeSize / 2;
texture.repeat.set(repeats, repeats);

const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
const planeMat = new THREE.MeshPhongMaterial({
  map: texture,
  side: THREE.DoubleSide,
});
const mesh = new THREE.Mesh(planeGeo, planeMat);
mesh.rotation.x = Math.PI * -0.5;
scene.add(mesh);

const skyColor = 0xb1e1ff; // light blue
const groundColor = 0xb97a20; // brownish orange
// const intensity = 0.6;
// const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);

const color = 0xffffff;
const intensity = 0.8;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 10, 0);
light.target.position.set(-5, 0, 0);
scene.add(light);
scene.add(light.target);

const objLoader = new OBJLoader();
objLoader.load(
  "https://threejs.org/manual/examples/resources/models/windmill/windmill.obj",
  (root) => {
    scene.add(root);
  }
);

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// function render() {
//   if (resizeRendererToDisplaySize(renderer)) {
//     const canvas = renderer.domElement;
//     camera.aspect = canvas.clientWidth / canvas.clientHeight;
//     camera.updateProjectionMatrix();
//   }

//   renderer.render(scene, camera);

//   requestAnimationFrame(render);
// }

requestAnimationFrame(render);

function App() {
  return (
    <div className="App">
      <canvas id="c"></canvas>
    </div>
  );
}

export default App;
