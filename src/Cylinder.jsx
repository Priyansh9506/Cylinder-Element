import React, { useRef } from 'react'
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Cylinder = () => {
  let texture = useTexture("/image.png");
  
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
    <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1.2, 70, 30, true]} />
        <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide}/>
    </mesh>
    </group>
  )
}

export default Cylinder
