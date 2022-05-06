import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
let main = document.getElementById("main");
let width = document.getElementById("main").offsetWidth;
let height = document.getElementById("main").offsetHeight;



export function Bust() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(22, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setClearColor(0, 0);
  main.appendChild(renderer.domElement);

  function CHeckWindowAndSetSizeAndRatio() {
    let width = document.getElementById("main").offsetWidth;
    let height = document.getElementById("main").offsetHeight;
    renderer.setPixelRatio(width / height);
    renderer.setSize(width / 2, height);
    if (width < 576) {
      renderer.setSize(width, height / 5);
      camera.position.set(0, -130, 10);
    } else if (width < 921) {
      renderer.setSize(width, height / 2);
      camera.position.set(0, -130, 4);
    } else {
      renderer.setSize(width / 2.5, height);
      camera.position.set(0, -130, 10);
    }
    renderer.render(scene, camera);
    // camera.rotateY(-1);
  }

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
    CHeckWindowAndSetSizeAndRatio();
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
 
  LoadBustandAnimate();
  window.addEventListener("resize", () => {
    CHeckWindowAndSetSizeAndRatio();
    
  });
}
