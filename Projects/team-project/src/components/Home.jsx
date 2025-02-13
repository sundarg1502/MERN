import NavBar from "./NavBar"
import Hero from "./Hero"
import homeImage from "/src/assets/hero.png"
import "/src/styles/Home.css"
import Vendors from "./Vendors"
const Home = () => {
  const category = [
    {
      id:1,
      name:"Cool Drinks",
      quantity:"200",
      img:"ct1"
    },{
      id:2,
      name:"Bakery",
      quantity:"100",
      img:"ct2"
    },{
      id:3,
      name:"Vegetables",
      quantity:"400",
      img:"ct3"
    },{
      id:4,
      name:"Fruits",
      quantity:"20",
      img:"ct4"
    },
  ]
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
      <Hero data={category}/>
      <Vendors/>
    </>
  )
}

export default Home
