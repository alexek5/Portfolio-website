import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './Navbar.css'
import memojiTest from '../../assets/memojiTest.svg'
import '../../App.jsx'

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#aboutMe">About Me</a></p>
    <p><a href="#myProjects">My Projects</a></p>
    <p><a href="#mySkills">My Skills</a></p>
    </>
)

const Navbar = () => {
    const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">

        <div className="navbar-links_logo">
            A
        </div>

        <div className="navbar-links_container">
            <Menu />
        </div>

        <div className="navbar-contactMe ">
            <button type="button"> <div className='button-text'>Contact Me</div></button>
        </div>

        <div className="navbar-menu">
            {toggleMenu
            ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='navbar-menu_container scale-up-center'>
                    <div className='navbar-menu_container-links'>
                        <Menu />
                    </div>
                </div>
            )}
        </div>  

    </div>

       



      
    </div>
  )
}

export default Navbar
