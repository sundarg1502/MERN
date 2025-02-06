import logo from "/src/assets/logo.svg"
import open from "/src/assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import close from "/src/assets/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import location from "/src/assets/location_on_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import mail from "/src/assets/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import time from "/src/assets/schedule_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import contact from "/src/assets/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import { useState } from "react"


const Header = () => {
  const [toggle, setToggle] = useState(false)

  const toggeleSideBar =()=>{
    console.log("first")
    // console.log(e.target.name)
    const sidebar = document.getElementById("vertical-sidebar")
    sidebar.style.display="flex"
  }

  return (
    <>
      <div className='nav-bar horizontal'>
        <img src={logo} alt="" />
        <ul className="nav-links nav-hide">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <div className="header-components">
          <h1 className="nav-hide">🛒</h1>
          <button className="contact-btn">Contact Us</button>
          <img src={open} alt="" onClick={toggeleSideBar} nam="open" />
        </div>
      </div>

      <div className="vertical" id="vertical-sidebar">
        <div className="vertical-header">
          <img src={logo} alt=""  className="sidebar-logo"/>
          <img src={close} alt="" className="side-close" name="close" onClick={toggeleSideBar}/>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <div className="nav-contact">
          <h3 className="contact-h">Contact Info</h3>
          <h3><img src={location} />Main Streat, Melumbur, Autrallia</h3>
          <h3><img src={mail} alt="" />Example@foodking.com</h3>
          <h3><img src={time} alt="" />Mon-Fri, 09AM-05PM</h3>
          <h3><img src={contact} alt="" />+91 123456789</h3>
        </div>
        <button className="order-now">🚚 Order Now</button>
        <div className="social">
          <a href="#">f</a>
          <a href="#">g</a>
          <a href="#">g</a>
          <a href="#">a</a>
        </div>
      </div>
    </>
  )
}

export default Header
