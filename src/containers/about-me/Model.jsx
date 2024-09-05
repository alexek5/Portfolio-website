import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, ContactShadows } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';


const Model = ({ scrollPosition }) => {
  const { scene: earthScene } = useGLTF('/scene.gltf'); // Laddar Earth-modellen
  const { scene: stockholmScene } = useGLTF('/mapPin.gltf'); // Laddar mapPin-modellen
  const { scene: lundScene } = useGLTF('/mapPin2.gltf'); // Laddar mapPin-modellen
  const earthRef = useRef();
  const stockholmRef = useRef();
  const lundRef = useRef();

  // State för att hantera skuggans skala
  const [shadowScale, setShadowScale] = useState(10);

  // Kamera från `useThree`-hooken
  const { camera } = useThree();

  const positionAmplitude = 0.05;
  const positionFrequency = 2;

  const lastRotation = useRef(0); // Store the last rotation before pausing
  const lastPosition = useRef(0);

  var timex = useRef(0);

  useEffect(() => {
    if (earthRef.current) {
      earthRef.current.position.set(0, 0, 0);
    }
    if (stockholmRef.current) {
      stockholmRef.current.position.set(0, 1, 0); // Placera mapPin bredvid huvudmodellen
      stockholmRef.current.scale.set(0.04, 0.04, 0.04); // Minska storleken till hälften
    }
    if (lundRef.current) {
      lundRef.current.position.set(0, 1, 0); // Placera mapPin bredvid huvudmodellen
      lundRef.current.scale.set(0.045, 0.045, 0.045); // Minska storleken till hälften
    }
  }, []);

  useFrame(() => {


    if (scrollPosition < 650) {
      timex.current += 0.03;
      const yPosition = positionAmplitude * Math.sin(timex.current * positionFrequency);

      if (earthRef.current) {
        earthRef.current.rotation.y += 0.005;
        earthRef.current.position.y = yPosition;
      }


      camera.position.set(0, 1, 5);
      camera.lookAt(0, 0, 0);
      lastRotation.current = earthRef.current.rotation.y;
      lastPosition.current = earthRef.current.position.y;
    }



    if (scrollPosition >= 650 && scrollPosition <= 1400) {
      const progress = (scrollPosition - 650) / 750;
      
      const targetCam = { x: 0, y: 1, z: 1 };
      const targetRotation = 3.2;
      const targetLookAt = 0.6;

      camera.position.x = 0 * (1 - progress) + targetCam.x * progress;
      camera.position.y = 1 * (1 - progress) + targetCam.y * progress;
      camera.position.z = 5 * (1 - progress) + targetCam.z * progress;

      const lookAtY = 0 * (1 - progress) + targetLookAt * progress;

      if (earthRef.current) {
        if(targetRotation != earthRef.current.rotation.y)

          earthRef.current.rotation.y = lastRotation.current * (1 - progress) + targetRotation * progress;
          earthRef.current.position.y = lastPosition.current * (1 - progress) + 0 * progress;
      }

      camera.lookAt(0, lookAtY, 0);
    }



    if (scrollPosition > 1400 && scrollPosition <= 1600) {
      const progress = (scrollPosition - 1400) / 200;
      //stockholmRef.current.position.set(0.025, 0.963, 0.8);
      const targetPin = { x: 0.023, y: 0.962, z: 0.8}
      camera.position.set(0, 1, 1)
      earthRef.current.rotation.y = 3.2;
          earthRef.current.position.y = 0;
      if(stockholmRef.current){
        stockholmRef.current.position.x = targetPin.x;
        stockholmRef.current.position.y = 1.2 * (1-progress) + targetPin.y * progress;
        stockholmRef.current.position.z = targetPin.z;
      }

      camera.lookAt(0, 0.6, 0);

    }

    if (scrollPosition > 1600 && scrollPosition <= 2000){
      
      if(stockholmRef.current){
        stockholmRef.current.position.set(0.023, 0.962, 0.8);
      }
      camera.lookAt(0, 0.6, 0);
      
    }



    if (scrollPosition > 2000 && scrollPosition <= 2500) {
      const progress = (scrollPosition - 2000) / 500;
      const targetPin = { x: 0.006, y: 0.957, z: 0.85 };
      if(stockholmRef.current){
        stockholmRef.current.position.set(0.023, 0.962, 0.8);
      }
  
      if(lundRef.current){
        lundRef.current.position.x = targetPin.x;
        lundRef.current.position.y = 1.2 * (1-progress) + targetPin.y * progress;
        lundRef.current.position.z = targetPin.z;
        
      }

      
  
      camera.lookAt(0, 0.6, 0);
    }

    if (scrollPosition > 2500 && scrollPosition <= 3000) {
      
      if(lundRef.current){
        lundRef.current.position.set(0.006, 0.957, 0.85);
      }
      if(stockholmRef.current){
        stockholmRef.current.position.set(0.023, 0.962, 0.8);
      }

      camera.lookAt(0, 0.6, 0);
    }
  });

  return (
    <>
      {/* Earth-modellen */}
      <primitive ref={earthRef} object={earthScene} castShadow receiveShadow />
      
      {/* mapPin-modellen */}
      <primitive ref={stockholmRef} object={stockholmScene} castShadow receiveShadow />

      <primitive ref={lundRef} object={lundScene} castShadow receiveShadow />

      {/* Skugga */}
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.3}
        scale={shadowScale}
        blur={2}
        far={3}
        castShadow
      />
    </>
  );
};

export default Model;
