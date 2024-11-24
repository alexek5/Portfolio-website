import React from 'react';


import { Article, Navbar} from './components';
import { Header, AboutMe, MyProjects, MySkills, End} from './containers';
import './App.css'


const App = () => {
  return (
    <>
    <div className = "App"> 
    
      <div className = "Hero">
        <Navbar />
        <Header />
      </div>
      
      <div id="aboutMe">
        <AboutMe />
      </div>

      <div id='mySkills'>
        <MySkills />
      </div>

      <div id="myProjects">
        <MyProjects /> 
      </div>

      <End />



    </div>
    </>

  )
}

export default App
