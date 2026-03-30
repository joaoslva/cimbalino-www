import * as THREE from "three";
import { HollowCylinder } from "./HollowCylinder.js";

class Mug extends THREE.Object3D {
  constructor(baseRadius = 1.7, rimRadius = 2, height = 4) {
    super();

    const material = new THREE.MeshPhongMaterial({
      color: "#EFE7DB",
      specular: "#51382F",
      shininess: 90,
    });

    // Hollow rim (CSG subtraction)
    const mug = new HollowCylinder(
      baseRadius, rimRadius, height,
      12, 1, false, 0, Math.PI * 2,
      "#EFE7DB", "#51382F"
    );
    mug.mesh.position.set(0, height / 8, 0);
    this.add(mug.mesh);

    const handle = new THREE.Mesh(
      new THREE.TorusGeometry(1.5, 0.25, 6, 5, Math.PI),
      material
    );
    handle.rotateZ(-Math.PI / 2)
    handle.position.set(rimRadius / 2 + 1.5 / 2, 0.5, 0);
    this.add(handle);

    const coffee = new THREE.Mesh(
      new THREE.CircleGeometry(rimRadius, 12),
      material
    );
    coffee.position.set(0, 2, 0);
    coffee.rotateX(-Math.PI / 2)
    this.add(coffee);
  }
}

export { Mug };
