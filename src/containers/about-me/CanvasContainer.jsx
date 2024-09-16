import Model from './Model.jsx';
import './canvasContainer.css'
import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';



const CanvasContainer = ({scrollPosition}) => {


  return (
    <>     
        
          
    
    <div className="canvas-container">
        <div className='canvas'>
        <Canvas 
  camera={{ 
    position: [0, 2, 15], // Flyttar kameran bakåt
    fov: 50, // Justerar fältet för perspektiv
  }}
  shadows
>
          <ambientLight intensity={2} />
          <spotLight intensity={5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <ScrollControls pages={0} damping={0.25}>
            <Model scrollPosition={scrollPosition}/>
          </ScrollControls>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
        </Canvas>
        </div>
      
        
    </div>

         
    </>
  )
}

export default CanvasContainer;


