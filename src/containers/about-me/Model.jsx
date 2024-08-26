import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
  const { scene } = useGLTF('/scene.gltf'); // Ensure this path is correct
  const modelRef = useRef();
  
  // State for the shadow's scale
  const [shadowScale, setShadowScale] = useState(10);

  const positionAmplitude = 0.05; // Amplitude for up-and-down movement
  const positionFrequency = 2; // Frequency of up-and-down movement
  const rotationSpeed = 0.002; // Speed of rotation

  useEffect(() => {
    if (modelRef.current) {
      // Set the initial rotation (x, y, z)
      modelRef.current.rotation.set(0.4, 2, 0); 
      modelRef.current.position.set(0, 0, 0);
    }
  }, []);

  useFrame(({ clock }) => {
    if (modelRef.current) {
      const time = clock.getElapsedTime();

      // Rotate the model
      modelRef.current.rotation.y += rotationSpeed;

      // Calculate up and down movement using a sine wave
      const yPosition = positionAmplitude * Math.sin(time * positionFrequency);
      modelRef.current.position.y = yPosition;

      // Optionally, you can adjust shadow scale based on yPosition
      // const newShadowScale = 10 + (yPosition * 50); // Scale shadow inversely to y
      // setShadowScale(newShadowScale);
    }
  });

  return (
    <>
      {/* The model */}
      <primitive ref={modelRef} object={scene} castShadow receiveShadow />
      
      {/* Contact shadows, positioned directly under the model */}
      <ContactShadows
        position={[0, -1.4, 0]} // Ensures the shadow is below the model
        opacity={0.3}
        scale={shadowScale} // Bind scale to state
        blur={2}
        far={3}
        castShadow
      />
    </>
  );
};

export default Model;

