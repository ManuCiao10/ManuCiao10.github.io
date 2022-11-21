import { useState } from "react";
import "./App.css";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { render } from "react-dom";

const loader = new GLTFLoader();
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
//set full screen
renderer.setSize(window.innerWidth, window.innerHeight);
//sey color white
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);

function App() {
  return <div className="App"></div>;
}

export default App;
