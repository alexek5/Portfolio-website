import React from 'react';
import './header.css';
import memojiTest from '../../assets/memojiTest.svg'


const Header = () => {
  return (
    <div className="header section_padding" id="home">

      <div className = "header-content">
        <h1 className="gradient_text">Hi, My Name Is Alex</h1>
        <p>I'm a computer science engineer student and a software developer freelancer</p>
      </div>

      <div className="header-image">
        <img src={memojiTest} alt="character" />
      </div>
    </div>
  )
}

export default Header;

//        <!--  -->