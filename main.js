import "./style.css";

import "./style.css";
import "./app";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

function CHeckWindowAndSetSizeAndRatio() {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 2, window.innerHeight);
  if (window.innerWidth < 576) {
    renderer.setSize(window.innerWidth, window.innerHeight / 5);
    camera.position.set(0, -130, 12);
  } else if (window.innerWidth < 921) {
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    camera.position.set(0, -130, 8);
  } else {
    camera.position.set(0, -130, 2);
    camera.rotateY(-1000);
  }
}
// renderer.render(scene, camera);

CHeckWindowAndSetSizeAndRatio();

function LoadBustandAnimate() {
  let bust;
  const loader = new GLTFLoader();
  loader.load("./asset/img/scene3.glb", function (gltf) {
    console.log(gltf);
    bust = gltf.scene;
    console.log(bust);
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.translateY(90);
    console.log(bust.scale);
    bust.position.x = 0;
    bust.position.y = 0;
    scene.add(bust);
    animate();
    // bust.position.setX(0);
  });
  console.log(camera.position);
  scene.background = new THREE.Color("#131313");
  const light = new THREE.HemisphereLight(0xffffff, 0x000000, 4);
  scene.add(light);
  // camera.position.set(0, 6.123233995736766e-14, 1000);
  function animate() {
    requestAnimationFrame(animate);
    bust.rotation.z += 0.01;
    // controls.update();
    renderer.render(scene, camera);
  }
}
LoadBustandAnimate();

const pointLight = new THREE.AmbientLight(0xffffff);
pointLight.position.set(30, 20, 30);
pointLight.rotation.z -= 0.015;
// scene.add(pointLight);
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 5);
// scene.add(gridHelper);
// scene.add(lightHelper);
const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener("resize", () => {
  CHeckWindowAndSetSizeAndRatio();
});
