import "/src/styles/Hero.css"
import person from "/src/assets/category.jpg"
import ct1 from "/src/assets/ct1.svg"
import ct2 from "/src/assets/ct2.svg"
import ct3 from "/src/assets/ct3.svg"
import ct4 from "/src/assets/ct4.svg"


const Hero = (props) => {
    const {data} = props 
  return (
    <div className='hero-section'>
      <div className="img-container img-hide">
        <div className="offer">50% Offer</div>
        <img src={person} alt="" />
      </div>
      <div className="content-container">
        <h2 className="hero-header">Explore Catagory</h2>
        <div className="hero-slider">
            {
                data.map((item)=>(
                    // console.log("data from map",item.name,item.quantity)
                    <div className="card" key={item.id}>
                        <img src={ct1} alt="" />
                        <h3>{item.name}</h3>
                        <p>{item.quantity}</p>
                    </div>
                )
                )
            }
            
        </div>
      </div>
    </div>
  )
}

export default Hero
