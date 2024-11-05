import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MacContainer from './Components/MacContainer'
import "../public/stylesheets/style.css"

const App = () => {
  return (
    <Canvas >
      <OrbitControls />
      <MacContainer />  
    </Canvas>
  )
}

export default App