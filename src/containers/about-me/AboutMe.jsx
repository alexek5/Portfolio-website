import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';


import './aboutMe.css';
import Overlay from './Overlay.jsx';
import CanvasContainer from './CanvasContainer.jsx'

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
        const scrollY = window.scrollY - window.innerHeight -100; // the header (100vh) and navbar 100px
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
       <div className="sticky-section" ref={containerRef}>
        <Overlay />
        <CanvasContainer scrollPosition={scrollPosition}/> 
        
        </div>


                 {/* Display Scroll Position */}
                 {startCounting && (
            <div className="scroll-indicator">
              Scrolled: {scrollPosition}px
            </div>
          )}

    </div>
  );
};

export default AboutMe;

