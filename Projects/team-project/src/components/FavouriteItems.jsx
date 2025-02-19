import axios from "axios"
import { useEffect, useState } from "react"
import "/src/styles/FavItem.css"

const FavouriteItems = () => {
    const [favData, seFav] = useState({})
    const [data, isData] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/Favourite")
            .then(res => {
                seFav(res.data)
                isData(true)
            })
    }, [])
    if (data) {
        favData.forEach(item => (
            console.log(item.id)
        ))
        console.log(favData)
    }
    return (
        // <div>
        //     <div className="fav-headers">
        //         <h1>favourite Items</h1>
        //     </div>
        //     <div className="fav-containers">
        //         {/* {
        //             data &&
        //             <>
        //                 {favData.map((product, index) => (
        //                     <div key={index} className="fav-container">
        //                         <div className="fav-image">
        //                             <img src={product.image} alt="" />
        //                         </div>
        //                         <div className="fav-content">
        //                             <div className="fav-rating">
        //                                 <h2>{product.Category}</h2>
        //                             </div>
        //                             <h1 className="fav-p-name">{product.product}</h1>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </>
        //         } */}
        //     </div>
        // </div>
        <div className="fav-div">
            <div className="fav-container">
                <div className="fav-div-header">
                    <h1>Favourite Items</h1>
                    <p>4</p>
                </div>
                <div className="fav-items">
                    <div className="fav-item">
                        <div className="fav-image-div">
                            <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg" alt="" />
                        </div>
                        <div className="fav-image-content">
                            <h2>Name of the Product</h2>
                            <p>Category</p>
                            <p>Ratings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouriteItems
