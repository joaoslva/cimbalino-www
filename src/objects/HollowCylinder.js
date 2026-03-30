import * as THREE from "three";
import { SUBTRACTION, Brush, Evaluator } from "three-bvh-csg";

class HollowCylinder extends THREE.Object3D {
  constructor(
    innerRadius = 1,
    outerRadius = 1,
    height = 1,
    radialSegments = 32,
    heightSegments = 1,
    openEnded = false,
    thetaStart = 0,
    thetaLength = Math.PI * 2,
    color,
    specular
  ) {
    super();

    const material = new THREE.MeshPhongMaterial({
      color,
      specular,
      emissive: "#000000",
      shininess: 90,
    });

    const outerGeo = new THREE.CylinderGeometry(
      outerRadius, outerRadius, height,
      radialSegments, heightSegments,
      openEnded, thetaStart, thetaLength
    );
    const innerGeo = new THREE.CylinderGeometry(
      innerRadius, innerRadius, height,
      radialSegments, heightSegments,
      openEnded, thetaStart, thetaLength
    );

    const outerBrush = new Brush(outerGeo);
    outerBrush.updateMatrixWorld();

    const innerBrush = new Brush(innerGeo);
    innerBrush.updateMatrixWorld();

    this.mesh = new Evaluator().evaluate(outerBrush, innerBrush, SUBTRACTION);
    this.mesh.material = material;
  }
}

export { HollowCylinder };
