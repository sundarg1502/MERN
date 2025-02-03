import React from 'react'
import banner from "/src/assets/Home-banner-image.png"

export const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <h2>Your Favourite Food<br></br>
                    Delivered Hot &<br></br>
                    Fresh</h2>
                <p>Healthy switcher chefs do all the prep work, like
                    peeding, chopping & marinating, so you can cook
                    a fresh food.</p>
                <button className='order-now'>Order Now ➡️</button>
            </div>
            <div className="image">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}
