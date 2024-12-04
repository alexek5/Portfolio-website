import React from 'react'
import './myProjects.css'

const MyProjects = () => {
  return (
    <div className='myProjects'>
      <div className='box'>

        <div className='title-section'>Projects</div>

        <div className='project-row'>
          <div className='project-box'>
          <div className='project-picture'> <img src="pic_trulli.jpg" alt="Italian Trulli" className='img'></img> </div>
            <div className='project-title'>Bosch (Thesis)</div>
            <div className='project-info'>
            <p style={{ marginBottom: '2rem' }}>
              (Ongoing) A LLM assisted trend scout for searching after relevant tech news and predict the potential of new technology
            </p>
            <p><strong>Languages:</strong> Python</p>
            <p><strong>Time:</strong> Feb 2025 - Jun 2025</p>

              </div>
  
          </div>

          <div className='project-box'>
          <div className='project-picture'> <img src="pic_trulli.jpg" alt="Italian Trulli" className='img'></img> </div>
            <div className='project-title'>SAAB</div>
            <div className='project-info'>A realistic simulation radar of aircrafts for SAAB militairy training</div>
            
          </div>

          <div className='project-box'>
          <div className='project-picture'> <img src="pic_trulli.jpg" alt="Italian Trulli" className='img'></img> </div>
            <div className='project-title'>Personal Website</div>
            <div className='project-info'>A personal website of my tech skills and my career</div>
            
          </div>

          <div className='project-box'>
          <div className='project-picture'> <img src="pic_trulli.jpg" alt="Italian Trulli" className='img'></img> </div>
            <div className='project-title'>TTime</div>
            <div className='project-info'>A time reporting system made in Lund university with 18 other student were i was the project leader</div>
            
          </div>



        </div>

      </div>
    </div>
  )
}

export default MyProjects
