import React, { useState, useEffect, useRef } from 'react';
import './header.css';

const Header = () => {

  return (
  <div className="header" id="home">
    <div className="header-content">

      <div className="rubrik-wrapper">
        <div className="rubrik gradient_text">Hi, My name is Alex!</div>
        <div className="cursor1"></div>
      </div>

      <div className='sub-rubrik-wrapper'>
        <div className='sub-rubrik'> I am a Software developer and a Computer scienctist</div>
        <div className="cursor2"></div>
      </div>

      
    

  </div>

    </div>
  );
}

export default Header;
