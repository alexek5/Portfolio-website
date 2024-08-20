import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './Navbar.css'
import memojiTest from '../../assets/memojiTest.svg'

const Menu = () => (
    <>
    <p><a href="#home">home</a></p>
    <p><a href="#aboutMe">About Me</a></p>
    </>
)

const Navbar = () => {
    const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">

        <div className="navbar-links_logo">
            <img src={memojiTest} alt="logo" />
        </div>

        <div className="navbar-links_container">
            <Menu />
        </div>
    </div>

        <div className="navbar-contactMe">
            <button type="button"> Contact Me</button>
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
  )
}

export default Navbar
