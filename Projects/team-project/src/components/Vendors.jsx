import "/src/styles/Vendor.css"
import vendor from "/src/assets/vendor.jpg"
import small from "/src/assets/vendor-1.jpg"
import { useEffect, useState } from "react"
import axios from "axios"

const Vendors = () => {
    const [vendors, setVendors] = useState({})
    const [fetch, setFetch]  = useState(false)
    useEffect(
        ()=>{
            axios.get("http://localhost:8000/Company")
            .then(response=>{
                // console.log(response)
                setVendors(response.data)
                setFetch(true)
            })
            .catch(error=>console.log(error))
        },[]
    )
    // if(fetch){
    //     vendors.forEach(vendor=>{
    //         console.log(typeof(vendor))
    //         console.log("dfata from effect",vendor.name,vendor.id)
    //         setVendors(vendor)
    //     })
    // }
    // console.log(typeof(vendors))
  return (
    <div className="vendor">
      <div className="vendor-header">
        <h1>Top <span>Vendors</span></h1>
        <p>Discover Our Trusted Partners: Excellence & Reliability in Every choice</p>
      </div>
      <div className="vendor-main">
        <div className="vendor-img">
            <img src={vendor} alt="" />
            <div className="small-image">
                <img src={small} alt="" />
            </div>
        </div>
        <div className="vendor-details">
            {
                fetch 
                &&
                vendors.map((data,index)=>(
                        <div className="vendor-detail">
                            <div className="name-items" key={index}>
                                <h1>{data.name}</h1>
                                <p>Fruits {data.Items.fruits} | Veg {data.Items.fruits} | Snacks {data.Items.fruits}</p>
                            </div>
                            <p>Sales - {data.SaleAmount}</p>
                        </div>
                    ))
                
            
            }
            {/* <div className="vendor-detail">
                <div className="name-items">
                    <h1>Mira Fashion PVT. LTD.</h1>
                    <p>Items</p>
                </div>
                <p>Sales - 587</p>
            </div>
            <div className="vendor-detail">
                <div className="name-items">
                    <h1>Mira Fashion PVT. LTD.</h1>
                    <p>Items</p>
                </div>
                <p>Sales - 587</p>
            </div>
            <div className="vendor-detail">
                <div className="name-items">
                    <h1>Mira Fashion PVT. LTD.</h1>
                    <p>Items</p>
                </div>
                <p>Sales - 587</p>
            </div>
            <div className="vendor-detail">
                <div className="name-items">
                    <h1>Mira Fashion PVT. LTD.</h1>
                    <p>Items</p>
                </div>
                <p>Sales - 587</p>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Vendors
