import React from 'react'
import aboutImg from "/src/assets/about-background-image.png"
const About = () => {
  return (
    <div className='about'>
        <div className="about-image">
            <img src={aboutImg} alt="" />
        </div>
        <div className="about-content">
            <h3 className='title'>About</h3>
            <h1 className='about-header'>Food Is An Important Part Of A Balanced Diet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, distinctio voluptatibus facilis corrupti rerum, debitis, illo et perspiciatis soluta incidunt amet impedit quidem. Voluptates, optio! Sint exercitationem doloremque facilis recusandae?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, harum!</p>
            <div className="buttons">
                <button className="learn-more">Learn More</button>
                <div className="vdo-style">
                    <button className='vdo'>📽️</button>
                    <p>Watch Vidoe</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
