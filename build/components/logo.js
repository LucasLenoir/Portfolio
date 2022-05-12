import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
let main = document.getElementById("main");
let width = document.getElementById("main").offsetWidth;
let height = document.getElementById("main").offsetHeight;

export function Logo() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(3, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setClearColor(0, 0);
  main.appendChild(renderer.domElement);
  function CHeckWindowAndSetSizeAndRatio() {
    renderer.setPixelRatio(width / 2 / height);
    renderer.setSize(width / 2, height);
    if (width < 576) {
      renderer.setSize(width, height / 5);
      camera.position.set(0, -130, 10);
    } else if (width < 921) {
      renderer.setSize(width, height / 2);
      camera.position.set(0, -130, 4);
    } else {
    }
    renderer.setSize(width / 2.5, height);
    camera.position.set(0, -30, 4);

  }
  CHeckWindowAndSetSizeAndRatio();
  function LoadLogoAndAnimate() {
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 0.5);
    const logoMaterial = new THREE.TextureLoader().load(
      "../../assets/img/logo.png"
    );
    const material = new THREE.MeshBasicMaterial({ map: logoMaterial });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    const light = new THREE.HemisphereLight(0xffffff, 0xff0000, 104);
    scene.add(light);
    light.position.set(30, 10, 0);
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.z += 0.01;
      
      controls.update();
      renderer.render(scene, camera);
      scene.add(camera);
    }
    animate();
  }
  LoadLogoAndAnimate();
}
