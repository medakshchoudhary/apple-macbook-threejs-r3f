import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MacContainer from './Components/MacContainer'
import "./stylesheets/style.css"

const App = () => {
  return (
    <Canvas camera={{fov:12,position:[0,-10,220]}}>
      <Environment files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
      ]} />

      <ScrollControls>
        <MacContainer />  
      </ScrollControls>
    </Canvas>
  )
}

export default App