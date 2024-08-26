import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';

import Model from './Model.jsx';
import './aboutMe.css';
import Overlay from './Overlay.jsx';

const AboutMe = () => {
  const containerRef = useRef(null);

  return (
    <div className="earth" ref={containerRef}>
      <div className="canvas-container">
        <Canvas shadows>
          <ambientLight intensity={2} />
          <spotLight intensity={5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <ScrollControls pages={0} damping={0.25}>
            <Model />
          </ScrollControls>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <Overlay />
    </div>
  );
};

export default AboutMe;
