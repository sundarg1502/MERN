import "/src/styles/Farmer.css"
import banner from "/src/assets/banner.jpg"

const Farmer = () => {
  return (
    <div className='farmer'>
        <img src={banner} alt="" />
        <div className="farmer-div">
          <span>25% Off</span>
          <h3>Fresh Vegetables</h3>
          <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Farmer
