import NavBar from "./NavBar"
import homeImage from "/src/assets/hero.png"
import "/src/styles/Home.css"
const Home = () => {
  return (
    <>
    <NavBar/>
      <div className='home'>
        <div className="home-content">
          <p>Flat 30% Offer</p>
          <h2>Explore <span className="header-span">Healthy</span> & Fresh Fruits</h2>
          <button>Shop Now</button>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
