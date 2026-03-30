import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Axis } from "./Axis.js";
import { Gui } from "./Gui.js";

class App {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.sceneContents = null;
    this.axis = null;
    this.gui = null;
  }

  init() {
    this.scene = new THREE.Scene();

    this.axis = new Axis();
    this.scene.add(this.axis);

    this.gui = new Gui(this);
    this.gui.init();

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.set(0, 5, 10);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.shadowMap.enabled = true;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor("#000000");

    document.getElementById("canvas").appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    window.addEventListener("resize", this.onResize.bind(this));
  }

  setScene(sceneContents) {
    this.sceneContents = sceneContents;
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.controls.update();
    if (this.sceneContents?.update) this.sceneContents.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }
}

export { App };
