import { useState } from 'react'
import menu from "/src/assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import close from "/src/assets/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  const isToggle = ()=>{
    const togglediv = document.getElementById("side-bar")
    togglediv.style.display="flex"
    setToggle(true)
    console.log(togglediv)
  }
  const isClose = ()=>{
    const togglediv = document.getElementById("side-bar")
    togglediv.style.display="none"
    setToggle(false)
    console.log(togglediv)
  }

  return (
    <div className='nav-bar'>
        <h1 className='header'>FOODIE</h1>
        <div className='nav-links horizontal'>
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Testimonial</li>
                <li>Contact</li>
                <li>🛒</li>
            </ul>
            <button className='book-now'>Book Now</button>
        </div>
            <li className='menu' onClick={isToggle} style={{listStyle:"none"}}><img src={menu} alt="" /></li>
        <div className='nav-links vertical' id='side-bar'>
            <ul className="nav-list list-vertical">
                <li className='close' style={{listStyle:"none"}} onClick={isClose}><img src={close} alt="" /></li>
                <li>Home</li>
                <li>About</li>
                <li>Testimonial</li>
                <li>Contact</li>
                <li>🛒</li>
            </ul>
            <button className='book-now none'>Book Now</button>
        </div>
    </div>
  )
}

export default Navbar