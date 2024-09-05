import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, ContactShadows } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import Timer from './Timer.jsx'; // Import the Timer class

const Model = ({ scrollPosition }) => {
  const { scene } = useGLTF('/scene.gltf'); // Ensure this path is correct
  const modelRef = useRef();
  
  // State for the shadow's scale
  const [shadowScale, setShadowScale] = useState(10);

  // Get the camera from the `useThree` hook
  const { camera } = useThree();

  const positionAmplitude = 0.05; // Amplitude for up-and-down movement
  const positionFrequency = 2; // Frequency of up-and-down movement

  // Create an instance of Timer


  const rotationSpeed = 0.3; // Speed of rotation
  const lastRotation = useRef(0); // Store the last rotation before pausing
  var timex = useRef(0);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0, 0);
    }
  });

  useFrame(() => {
    // Phase 1: Rotate the object when scrolling is less than 650px
    if (scrollPosition < 650) {
   

      // Calculate up-and-down movement using a sine wave
      timex.current += 0.03;
      const yPosition = positionAmplitude * Math.sin(timex.current * positionFrequency);

      // Apply the rotation and movement to the model
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005;
        modelRef.current.position.y = yPosition;
      }

      // Set the camera to a fixed position looking at the object
      camera.position.set(0, 1, 5);
      camera.lookAt(0, 0, 0);

            // Capture the last rotation state when scroll is under 650
            lastRotation.current = modelRef.current.rotation.y;

    }

    if (scrollPosition >= 650 && scrollPosition <= 1400) {
      const progress = (scrollPosition - 650) / 750; // Progress from 0 to 1 för rotation och camera movement
      const targetCam = { x: 0, y: 1, z: 1 }; // Den slutgiltiga positionen för kameran
      const targetRotation = 3.2; // Slutrotation (t.ex. 90 grader)
      const targetLookAt = 0.6; // Slutpunkt för camera lookAt
    
      // Smoothly interpolate camera's position
      camera.position.x = 0 * (1 - progress) + targetCam.x * progress;
      camera.position.y = 1 * (1 - progress) + targetCam.y * progress;
      camera.position.z = 5 * (1 - progress) + targetCam.z * progress;
    
      const lookAtY = 0 * (1 - progress) + targetLookAt * progress;
      
      // Interpolate the rotation from the current position to the target position
      if (modelRef.current) {
        if(targetRotation != modelRef.current.rotation.y)

          modelRef.current.rotation.y = lastRotation.current * (1 - progress) + targetRotation * progress;
      }
    
      // Apply the interpolated lookAt target
      camera.lookAt(0, lookAtY, 0);
    }
    

    if (scrollPosition > 1400 && scrollPosition <= 2500) {
      // Keep the camera at the fixed target position after 1400
      camera.position.set(0, 1, 1); // Use the exact position as before
      camera.lookAt(0, 0.6, 0); // Ensure the camera continues looking at the object
      if (modelRef.current) {
        modelRef.current.rotation.y = 3.2; // Rotate one full circle based on progress; // Continue rotating
      }
    }

    if (scrollPosition > 2500 && scrollPosition <= 3000) {
      camera.lookAt(0, 0, 0); // Look at the object

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
