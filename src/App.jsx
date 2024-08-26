import React from 'react';


import { Article, Navbar} from './components';
import { Header, AboutMe} from './containers';
import './App.css'

const App = () => {
  return (
    <>
    <div className = "App"> 
    <Navbar />
      <div className = "gradient_bg">
        
        <Header>
          
        </Header>
      </div>
      <AboutMe />
    </div>
    </>

  )
}

export default App
