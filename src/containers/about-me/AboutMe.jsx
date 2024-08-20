import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, ContactShadows, Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import Model from './Model.jsx';
import './aboutMe.css';

const AboutMe = () => {
  const [scrollState, setScrollState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      setScrollPosition(newScrollPosition);

      // Kontrollera om scrollningen har inträffat
      if (newScrollPosition > 600) { // Ändra detta tröskelvärde efter behov
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    };

    // Lägg till scroll-hanterare
    window.addEventListener('scroll', handleScroll);

    // Rensa scroll-hanterare när komponenten tas bort
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='earth'>
      <Canvas style={{ height: '100vh' }} shadows>
        <ambientLight intensity={2} />
        <spotLight intensity={5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <ScrollControls pages={3} damping={0.25}>
          <Model scrollState={scrollState} />

        </ScrollControls>
        <Environment preset="city" />

        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Visa text och scrollposition */}
      <div className="info-text">
        <p>Scrollposition: {scrollPosition.toFixed(2)}</p>
        {scrollState && (
          <p>Här är texten som visas när du scrollar.</p>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
