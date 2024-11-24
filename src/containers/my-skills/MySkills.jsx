import React from 'react';
import DoughnutChart from './DoughnutChart'; // Importera din doughnut-komponent
import './mySkills.css';

const MySkills = () => {
  return (
    <div className='mySkills'>
      <div className='pane'>
        <div className='title-row'>
        
            <div className='title'>Computer Knowledge</div>
            <div className='title'>Programming Languages</div>
          
        </div>

        <div className='content'>

        <div className='cirkel-container'>

          

          <div className='cirkel-rows'>

            <div className='cirkel'>
              <DoughnutChart data={[98, 2]}  />
              <div className='cirkel-text'>Java</div>
            </div>

            <div className='cirkel'>
              <DoughnutChart data={[85, 15]}   />
              <div className='cirkel-text'>SQL</div>
            </div>
           
          </div>


          <div className='cirkel-rows'>
            
            <div className='cirkel'>
              <DoughnutChart data={[80, 20]} />
              <div className='cirkel-text'>Python</div>
            </div>
            
            <div className='cirkel'> 
              <DoughnutChart data={[50, 50]}  />
              <div className='cirkel-text'>GO</div>
            </div>

          </div>



          <div className='cirkel-rows'>
            
            <div className='cirkel'>
              <DoughnutChart data={[30, 70]}  />
              <div className='cirkel-text'>C#</div>
            </div>
            
            <div className='cirkel'> 
              <DoughnutChart data={[30, 70]}  />
              <div className='cirkel-text'>C++</div>
            </div>

          </div>


        </div>

        <div className='bar-container'>

          
          
          <div className='bar-box'>
            
            <div className='bar-text'>Object-oriented modelling</div>
            <div className='bar'>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>              
            </div>

          </div>



          <div className='bar-box'>
            
            <div className='bar-text'>Network communication</div>
            <div className='bar'>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>              
            </div>

          </div>




          <div className='bar-box'>
            
            <div className='bar-text'>Computer architecture</div>
            <div className='bar'>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '50%' }}></div>
              </div>              
            </div>

          </div>




          <div className='bar-box'>
            
            <div className='bar-text'>Machine Learning</div>
            <div className='bar'>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '40%' }}></div>
              </div>              
            </div>

          </div>



          </div>


        
      </div>
      </div>
    </div>
  );
};

export default MySkills;
