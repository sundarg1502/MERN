import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <h1 className='header'>FOODIE</h1>
        <div className='nav-links'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Testimonial</li>
                <li>Contact</li>
                <li>🛒</li>
            </ul>
            <button className='book-now'>Book Now</button>
        </div>
    </div>
  )
}

export default Navbar