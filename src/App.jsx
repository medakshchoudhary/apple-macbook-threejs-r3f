import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MacContainer from './Components/MacContainer'
import "./stylesheets/style.css"

const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className="absolute flex flex-col items-center font-helevtica text-white top-28 left-1/2 -translate-x-1/2 font-semibold">
        <h3 className='masked tracking-tighter text-7xl'>macbook pro.</h3>
        <h6>Oh so pro!</h6>
        <p className='w-4/5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi modi? Sapiente, dicta?</p>
      </div>

      {/* canvas where the laptop is wokring */}
      <Canvas camera={{fov:12,position:[0,-14,220]}}>
      <Environment files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
      ]} />

      <ScrollControls>
        <MacContainer />  
      </ScrollControls>
    </Canvas>
    </div>
  )
}

export default App