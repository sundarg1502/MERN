import "/src/styles/Farmer.css"
import banner from "/src/assets/banner.jpg"

const Farmer = () => {
  return (
    <div className='farmer'>
        <img src={banner} alt="" />
        <div className="farmer-div"></div>
    </div>
  )
}

export default Farmer
