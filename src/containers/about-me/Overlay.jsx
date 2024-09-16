import React from 'react';
import './overlay.css';

const Overlay = () => {
  return (
    <>
    
    <div className="text-container">

    <div>
        <div>
        <div className="info-text1">
        Welcome to my webpage! <div className='test'>Scroll down</div> to learn more about me. 
        </div>
        <div className="space"> </div>
      </div>

      <div>
        <div className="info-text1 ">
        My name is <div className='test'>Alexander</div>. I'm 21 years old and I was born in <div className='test'>Sweden</div>.
        </div>
        <div className="space"> </div>
      </div>

      <div>
        <div className="info-text1">
        In high school i went to sjölins gymnasium in <div className='test'>Stockholm</div> and studied Natural Science.
        </div>
        <div className="space"> </div>
      </div>

      <div>
        <div className="info-textEnd">
        Then i started at <div className='test'>Lunds univeristy* </div>where i studied Computer Science.
            <div className='extra-text'>*Lund is the top 64 univeristy in the world</div>
        </div>
        <div className="space"> </div>
        <div className="end-space"> </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default Overlay
