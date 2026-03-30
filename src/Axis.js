import * as THREE from "three";

class Axis extends THREE.Object3D {
  constructor(size = 2, baseRadius = 0.05) {
    super();

    const colors = { x: 0xff0000, y: 0x00ff00, z: 0x0000ff };

    const makeCone = (color, position, rotation) => {
      const mesh = new THREE.Mesh(
        new THREE.ConeGeometry(baseRadius, size, 32),
        new THREE.MeshBasicMaterial({ color })
      );
      mesh.position.copy(position);
      mesh.rotation.copy(rotation);
      this.add(mesh);
    };

    makeCone(
      colors.x,
      new THREE.Vector3(size / 2, 0, 0),
      new THREE.Euler(0, 0, -Math.PI / 2)
    );
    makeCone(
      colors.y,
      new THREE.Vector3(0, size / 2, 0),
      new THREE.Euler(0, 0, 0)
    );
    makeCone(
      colors.z,
      new THREE.Vector3(0, 0, size / 2),
      new THREE.Euler(Math.PI / 2, 0, 0)
    );

    const helper = new THREE.AxesHelper(5);
    helper.setColors(
      new THREE.Color(colors.x),
      new THREE.Color(colors.y),
      new THREE.Color(colors.z)
    );
    this.add(helper);
  }
}

Axis.prototype.isGroup = true;

export { Axis };
