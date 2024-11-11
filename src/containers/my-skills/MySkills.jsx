import React from 'react'
import './mySkills.css'

const MySkills = () => {
  return (
    <div className='mySkills'>
      <div className='pane'>

        <div className='cirkel-container'>
          
          <div className='cirkel-rows'>
            <div className='cirkel'>java</div>
            <div className='cirkel'>java</div>
          </div>

          <div className='cirkel-rows'>
            <div className='cirkel'>java</div>
            <div className='cirkel'>java</div>
          </div>

          <div className='cirkel-rows'>
            <div className='cirkel'>java</div>
            <div className='cirkel'>java</div>
          </div>

        </div>


        <div className='bar-container'>
          
          <div className='bar-box'>
            <div className='bar-text'>nätverk</div>
            <div className='bar'></div>
          </div>
          <div className='bar-box'>
            <div className='bar-text'>nätverk</div>
            <div className='bar'></div>
          </div>
          <div className='bar-box'>
            <div className='bar-text'>nätverk</div>
            <div className='bar'></div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MySkills
