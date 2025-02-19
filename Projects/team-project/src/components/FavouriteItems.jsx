import axios from "axios"
import { useEffect, useState } from "react"

const FavouriteItems = () => {
    const [favData, seFav]= useState({})
    const [data, isData] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/Favourite")
        .then(res=>{
            seFav(res.data)
            isData(true)
        })
    },[])   
    if(data){
        favData.forEach(item=>(
            console.log(item.id)
        ))
        console.log(favData)  
    }
  return (
    <div>
      <div className="fav-container">
        {   
            data &&
            <>
            {favData.map((product,index)=>(
                <div key={index} className="container">
                <div className="image">
                    <img src={product.image} alt="" />
                </div>
                <div className="content">
                    <div className="rating">
                        <h2>{product.Category}</h2>
                        {/* <h3>{product.rating}</h3> */}
                    </div>
                    <h1 className="p-name">{product.product}</h1>
                    {/* <div className="rupee">
                        <p ><span className="s">{product["Old price"]}</span> <del><span className="e">{product["New Price"]}</span></del> < span className="a">{product.Quantity}</span></p>
                    </div> */}
                </div>
            </div>
            ))}
            </>
        }
      </div>
    </div>
  )
}

export default FavouriteItems
