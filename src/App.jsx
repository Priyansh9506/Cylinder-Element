import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'
import React from 'react'
import MyCylinder from './Cylinder.jsx'
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  
  return (
      <Canvas flat camera={{fov :35}}>
        <OrbitControls />
        <ambientLight />
        <MyCylinder />
        <EffectComposer>
          <Bloom  
            mipmapBlur
            intensity={2.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.3}
          />
          <ToneMapping adaptive={true} />
        </EffectComposer>
      </Canvas>
  )
}

export default App

