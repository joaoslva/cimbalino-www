import * as THREE from "three";
import { Plate } from "./objects/Plate";
import { Mug } from "./objects/Mug";
import { Table } from "./furniture/Table";

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

    const table = new Table();
    this.app.scene.add(table);
  }

  update() {
    // called every frame — animate things here
  }
}

export { Scene };
