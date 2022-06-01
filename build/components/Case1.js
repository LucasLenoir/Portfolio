import * as THREE from "three";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Container } from "./Container";
let main = document.getElementById("main");
let width = document.getElementById("main").offsetWidth;
let Height = document.getElementById("main").offsetHeight;
let height = (80 * main.offsetHeight) / 100;

export function Case1(bg) {
  const container = document.getElementById("container");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    (40 * main.offsetWidth) / 100 / height,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setClearColor(0, 0);
  container.appendChild(renderer.domElement);
  function CHeckWindowAndSetSizeAndRatio() {
    renderer.setPixelRatio(main.offsetWidth / 2 / height);
    // renderer.setSize(main.offsetWidth / 2, height);
    if (main.offsetWidth < 576) {
      renderer.setSize(main.offsetWidth, main.offsetHeight / 2);
      camera.position.set(0, -130, 10);
    } else if (main.offsetWidth < 921) {
      renderer.setSize(main.offsetWidth, height / 2);
      camera.position.set(0, -130, 4);
    } else {
    }
    renderer.setSize(main.offsetWidth / 2.5, (80 * height) / 100);
    camera.position.set(0, 0, 5);
  }
  CHeckWindowAndSetSizeAndRatio();
  function LoadCase1AndAnimate() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const logoMaterial = new THREE.TextureLoader().load(bg);
    const material = new THREE.MeshStandardMaterial({ map: logoMaterial });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.update();
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = -12;
    light.position.y = -3;
    light.position.z = 20;
    scene.add(light);
    const lighthelper = new THREE.DirectionalLightHelper(light, 5);
    // scene.add(lighthelper);
    const clock = new THREE.Clock();
    function animate() {
      const elapsedTime = clock.getElapsedTime();

      window.requestAnimationFrame(animate);
      cube.rotation.y = 0.2 * elapsedTime;
      cube.rotation.x = 0.2 * elapsedTime;

      // controls.update();
      renderer.render(scene, camera);
      scene.add(camera);
    }
    animate();
  }
  LoadCase1AndAnimate();
}
