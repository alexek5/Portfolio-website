import React from 'react';
import './overlay.css';

const Overlay = () => {
  return (
    <>
    
    <div className="text-container">

    <div>
        <div>
        <div className='info-text1'>
            hej mitt namn är alexander. scrolla ner för att veta mer om mig
        </div>
        <div className="space"> </div>
        </div>
        
        <div className="info-text1">
        starta sidan med rubrik och texten scrolla ner för att veta mer om mig. 
        </div>
        <div className="space"> </div>
      </div>

      <div>
        <div className="info-text1">
        medan nästa kommer upp så zoomas vi till sverige.
        </div>
        <div className="space"> </div>
      </div>

      <div>
        <div className="info-text2">
        medan nästa kommer upp så sätts en pin på stockholm.
        </div>
        <div className="space2"> </div>

        <div>
        <div className="info-text2">
        medan nästa kommer upp så sätts en pin på lund. och när denna text scrollas undan så zoomar vi ut från jorden.
        </div>
        <div className="space2"> </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default Overlay
