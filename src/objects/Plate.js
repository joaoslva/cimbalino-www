import * as THREE from "three";
import { HollowCylinder } from "../primitives-plus/HollowCylinder.js";

class Plate extends THREE.Object3D {
  constructor(baseRadius = 2.7, rimRadius = 4, height = 2) {
    super();

    const material = new THREE.MeshPhongMaterial({
      color: "#EFE7DB",
      specular: "#51382F",
      shininess: 90,
    });

    // Solid base disc
    const baseMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(baseRadius, baseRadius, height / 4, 12),
      material
    );
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    this.add(baseMesh);

    // Hollow rim (CSG subtraction)
    const rim = new HollowCylinder(
      baseRadius, rimRadius, height / 8,
      12, 1, false, 0, Math.PI * 2,
      "#EFE7DB", "#51382F"
    );
    rim.mesh.position.set(0, height / 8, 0);
    this.add(rim.mesh);
  }
}

export { Plate };
