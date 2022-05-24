import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const main = document.getElementById("main");
const width = document.getElementById("main").offsetWidth;
const height = document.getElementById("main").offsetHeight;

export function Bust() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    26,
    main.offsetWidth / main.offsetHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setClearColor(0, 0);
  main.appendChild(renderer.domElement);

  CHeckWindowAndSetSizeAndRatio();
  function LoadBustandAnimate() {
    let bust;
    const loader = new GLTFLoader();
    loader.load("../../assets/img/scene3.glb", function (gltf) {
      bust = gltf.scene;
      gltf.scene.scale.set(0.2, 0.2, 0.1);
      gltf.scene.translateY(200);
      bust.position.x = 0;
      bust.position.y = 0;
      scene.add(bust);
      animate();
      // bust.position.setX(0);
    });
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    // scene.background = new THREE.Color("#fffffff");
    const light = new THREE.HemisphereLight(0xffffff, 0x000000, 4);
    const gridHelper = new THREE.GridHelper(2, 9);
    scene.add(gridHelper);
    scene.add(light);
    function animate() {
      requestAnimationFrame(animate);
      bust.rotation.z += 0.01;
      controls.update();
      renderer.render(scene, camera);
      scene.add(camera);
    }
  }
  function CHeckWindowAndSetSizeAndRatio() {
    renderer.setPixelRatio(main.offsetWidth / 2 / main.offsetHeight);
    renderer.setSize(main.offsetWidth, height);
    if (width < 672) {
      renderer.setSize(main.offsetWidth / 2.5, main.offsetHeight);
      camera.position.set(0, -130, 10);
      camera.getEffectiveFOV(250);
    } else if (width < 1000) {
      renderer.setSize(main.offsetWidth / 2.5, main.offsetHeight);
      camera.position.set(0, -130, 10);
    } else if (width < 752) {
      renderer.setSize(main.offsetWidth / 2.5, main.offsetHeight);
      camera.position.set(0, -130, 10);
    } else {
      renderer.setSize(main.offsetWidth, main.offsetHeight);
      camera.position.set(0, -130, 10);
    }

    // camera.rotateY(-1);
  }
  LoadBustandAnimate();
  window.addEventListener("resize", () => {
    CHeckWindowAndSetSizeAndRatio();
  });
}
