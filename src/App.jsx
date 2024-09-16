import React from 'react';


import { Article, Navbar} from './components';
import { Header, AboutMe, MyProjects, MySkills} from './containers';
import './App.css'


const App = () => {
  return (
    <>
    <div className = "App"> 
    
      <div className = "Hero">
      <Navbar />
      <Header />
      </div>
      
      <AboutMe />
      <MyProjects />
      <MySkills />

    </div>
    </>

  )
}

export default App
