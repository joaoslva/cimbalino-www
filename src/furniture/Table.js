import * as THREE from "three";
import { Mug } from "../objects/Mug";
import { Plate } from "../objects/Plate";

class Table extends THREE.Object3D {
    constructor() {
        super();

        const material = new THREE.MeshPhongMaterial({
            color: "#EFE7DB",
            specular: "#51382F",
            shininess: 90,
    });

        const base = new THREE.Mesh(new THREE.BoxGeometry(10, 1, 7), material);
        this.add(base);

        const plate = new Plate();
        plate.scale.set(0.5, 0.5, 0.5);
        plate.position.set(0, 0.5, 0);

        const mug = new Mug();
        mug.scale.set(0.4, 0.4, 0.4);
        mug.position.set(0, 1.15, 0);

        const mugGroup = new THREE.Object3D();
        mugGroup.add(plate);
        mugGroup.add(mug);
        mugGroup.position.set(-2, 0, -1);
        mugGroup.rotateY(1)
        this.add(mugGroup);

        const leg1 = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), material);
        leg1.position.set(4, -2.5, 2.5);
        this.add(leg1);

        const leg2 = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), material);
        leg2.position.set(-4, -2.5, 2.5);
        this.add(leg2);

        const leg3 = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), material);
        leg3.position.set(-4, -2.5, -2.5);
        this.add(leg3);

        const leg4 = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), material);
        leg4.position.set(4, -2.5, -2.5);
        this.add(leg4);

        const support1 = new THREE.Mesh(new THREE.BoxGeometry(7, 0.8, 0.3), material);
        support1.position.set(0, -0.9, -2.5);
        this.add(support1);

        const support2 = new THREE.Mesh(new THREE.BoxGeometry(7, 0.8, 0.3), material);
        support2.position.set(0, -0.9, 2.5);
        this.add(support2);

        const support3 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.8, 4), material);
        support3.position.set(4, -0.9, 0);
        this.add(support3);

        const support4 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.8, 4), material);
        support4.position.set(-4, -0.9, 0);
        this.add(support4);
    }
}

export { Table };