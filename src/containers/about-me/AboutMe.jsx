import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';

import Model from './Model.jsx';
import './aboutMe.css';
import Overlay from './Overlay.jsx';

const AboutMe = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [startCounting, setStartCounting] = useState(false); // State to track if counting should start

  //start scroll counting at about me page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true); // Start counting when AboutMe section reaches the top
        } else {
          setStartCounting(false); // Stop counting if scrolled out of view
        }
      },
      { threshold: 0.1 } // This makes sure we only start when 10% of the section is visible
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  //scroll counting
  useEffect(() => {
    const handleScroll = () => {
      if (startCounting) {
        const scrollY = window.scrollY - 500; // Subtract the top offset of the AboutMe section
        setScrollPosition(Math.max(scrollY, 0)); // Ensure we don't go below 0
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startCounting]);

  return (
    
    <div className='about-me'>
    
    
    <div className="earth" ref={containerRef}>
    <Overlay />
    
    <div className='rubrik'>about me</div>
    
      <div className="canvas-container">
      
        <Canvas shadows>
          <ambientLight intensity={2} />
          <spotLight intensity={5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <ScrollControls pages={0} damping={0.25}>
            <Model scrollPosition={scrollPosition}/>
          </ScrollControls>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      

      {/* Display Scroll Position */}
      {startCounting && (
        <div className="scroll-indicator">
          Scrolled: {scrollPosition}px
        </div>
      )}
      
    </div>
    </div>
  );
};

export default AboutMe;

