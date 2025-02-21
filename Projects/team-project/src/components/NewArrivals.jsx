import { useEffect, useState } from "react"
import axios from "axios"
import "/src/styles/Newarrivals.css"
import single from "/src/assets/vendor.jpg"
const NewArrivals = () => {
    const [products, setProducts] = useState({})
    const [fetchData, setFetach] = useState(false)
    var setFavItemsObj = {} 
    useEffect(() => {
        axios.get("http://localhost:8000/Product")
            .then(response => {
                setProducts(response.data)
                setFetach(true)
            })
            .then(error => console.log(error))
    }, []
    )
    const handleFav = (e)=>{
        for(var data of products){
            if(e.target.value === data.name){
                setFavItemsObj.productId = data.id
                setFavItemsObj.product = data.name
                setFavItemsObj.Category = data.Category
                setFavItemsObj.image = data.image
                setFavItemsObj.stars = data.rating
                break

            }
        }
        if(setFavItemsObj.length!==0){
            console.log(setFavItemsObj)
            axios.post("http://localhost:8000/Favourite",setFavItemsObj)
            .then(response=>alert("Produt added to Wishlist"))
            .catch(err=>console.log(err))
        }
        console.log(e.target.name)
        console.log(e.target.value)
    }
    return (
        <div className="new-arrivals">
            <div className="arrival-container">
                <div className="arr-content">
                    <h2 className="arr-header">New <span>Arrival</span></h2>
                    <p className="arr-bottom">Shop Online For New Meterial</p>
                    <div className="arr-nav">
                        <ul>
                            <li>All</li>
                            <li>Snacks</li>
                            <li>Fruits</li>
                            <li>veg</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="arr-products">
                {
                    fetchData &&
                    <div className="product-list">
                        {products.map((product, index) => (
                            <div key={index} className="container">
                                <div className="image">
                                    <img src={product.image} alt="" className="first-image"/>
                                    <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/back-4.jpg" alt="" className="second-image"/>
                                    <div className="options">
                                        <button onClick={handleFav} name="FavButon" value={product.name}>♥</button>
                                        <button>👁</button>
                                        <button >🔃</button>
                                        <button>🧷</button>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="rating">
                                        <h2>{product.Category}</h2>
                                        <h3>{product.rating}</h3>
                                    </div>
                                    <h1 className="p-name">{product.name}</h1>
                                    <div className="rupee">
                                        <p ><span className="s">{product["Old price"]}</span> <del><span className="e">{product["New Price"]}</span></del> < span className="a">{product.Quantity}</span></p>
                                    </div>
                                </div>
                                {/* <div className="eye-hide">
                                    add to Cart
                                </div> */}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default NewArrivals      


// mongodb+srv://root:<db_password>@cluster0.gp12d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0