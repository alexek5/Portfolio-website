import React, { useRef, useEffect } from 'react';
import { useGLTF, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = ({ scrollState }) => {
  const { scene } = useGLTF('/scene.gltf'); // Kontrollera att denna sökväg är korrekt
  const modelRef = useRef();

  const [shadowScale, setShadowScale] = React.useState(10); // Initial shadow scale
  const positionAmplitude = 0.1; // Amplitud för upp- och ner-rörelsen
  const positionFrequency = 2; // Frekvens av upp- och ner-rörelsen
  const rotationSpeed = 0.002; // Hastighet för rotation

  useEffect(() => {
    if (modelRef.current) {
      // Ändra startrotation (x, y, z)
      modelRef.current.rotation.set(0.4, 2, 0); // Exempel: rotera objektet 45 grader runt y-axeln
      modelRef.current.position.set(0, 0, 0); 

      // Zooma in på ett visst ställe när scrollState är true
      if (scrollState) {
        modelRef.current.position.set(0, 0, 3.5); // Exempel: Zooma in på (0, 2, 0)
        modelRef.current.rotation.set(1, 3.3, 0); // Exempel: Ställ in rotation
      }
    }
  }, [scrollState]);

  useFrame(({ clock }) => {
    if (modelRef.current && !scrollState) {
      const time = clock.getElapsedTime();

      // Rotate the model
      modelRef.current.rotation.y += rotationSpeed;

      // Calculate the up and down movement with a sine wave
      const yPosition = positionAmplitude * Math.sin(time * positionFrequency);
      modelRef.current.position.y = yPosition;

      // Adjust shadow scale based on the y-position (inverse relationship)
      const newShadowScale = 10 +(yPosition * 50); // Scale shadow inversely to y
      setShadowScale(newShadowScale);
    }
  });

  return (
    <>
      {/* The model */}
      <primitive ref={modelRef} object={scene} castShadow={true} receiveShadow={true} />
      
      {/* Contact shadows, positioned directly under the model */}
      <ContactShadows
        position={[0, -1.4, 0]} // This position ensures the shadow is below the model
        opacity={0.3}
        scale={shadowScale}
        blur={2}
        far={3}
        castShadow={true}
      />
    </>
  );
};

export default Model;
