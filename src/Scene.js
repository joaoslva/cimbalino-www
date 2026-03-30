import * as THREE from "three";
import { Plate } from "./objects/Plate";
import { Mug } from "./objects/Mug";

class Scene {
  constructor(app) {
    this.app = app;
  }

  build() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.app.scene.add(ambientLight);

    // Directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    this.app.scene.add(dirLight);

    // placeholder: add your objects here
    const plate = new Plate();
    //this.app.scene.add(plate);

    const mug = new Mug();
    this.app.scene.add(mug);
  }

  update() {
    // called every frame — animate things here
  }
}

export { Scene };
