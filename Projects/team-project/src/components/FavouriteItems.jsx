import axios from "axios"
import { useEffect, useState } from "react"
import "/src/styles/FavItem.css"

const FavouriteItems = () => {
    const [favData, seFav] = useState({})
    const [data, isData] = useState(false)
    const [count, setCount] = useState(0)
    const [product, setProduct] = useState({})
    const setCartItems = {}
    useEffect(() => {
        axios.get("http://localhost:8000/Favourite")
            .then(res => {
                seFav(res.data)
                isData(true)
            })
        axios.get("http://localhost:8000/Product")
        .then(res=>{
            console.log("Data rom res" ,res.data)
            setProduct(res.data)
        })
    }, [])
    // if (data) {
    //     favData.forEach(item => (
    //         console.log(item.id)
    //     ))
    //     console.log(favData)
    // }
    const removeFav = (e)=>{
        const productId = "http://localhost:8000/Favourite/"+e.target.value
        console.log("Product id",productId)
        axios.delete(productId)
        .then(res=>{
            console.log(res)
            if(favData.length<=0){
                isData(false)
            }
            else{
                isData(true) 
                alert("product Removed Successfully")
            }
        })
        .catch(err=>console.log(err))
    }
    const updateCart = (e)=>{
        console.log(count)
        console.log(e.target.value)
        // console.log()
        product.forEach(p=>{
            if(e.target.value==p.id){
            console.log("target")
            setCartItems.id = p.id
            setCartItems.name = p.name
            setCartItems.count = count
            // break
            console.log("Cart items:",setCartItems)
            axios.post("http://localhost:8000/Cart",setCartItems)
            .then(res=>alert("Product Added to Cart"))
            .catch(err=>{console.log(err)})
        }
    })
}
    return (
        <div className="fav-div">
            <div className="fav-container">
                <div className="fav-div-header">
                    <h1>Favourite Items</h1>
                    <p>4</p>
                </div>
                <div className="fav-items">
                    {data &&
                        <>
                            {favData.map((data, index) => (
                                <>
                                    <div className="fav-item" key={index}>
                                        <div className="fav-item-header">
                                            <p>{data.Category}</p>
                                            <h2>{data.product}</h2>
                                            <div className="fav-image-div">
                                                <img src={data.image} alt="" />
                                            </div>
                                            <div className="fav-button">
                                                <button onClick={removeFav} value={data.id}> ❌</button>
                                            </div>
                                        </div>
                                        <div className="fav-content">
                                            <p>{data.stars}</p>
                                            <input type="checkbox" id="cart" className="open-cart" />
                                            <label htmlFor="cart">🛒</label>
                                            <div className="add-cart">
                                            <label htmlFor="cart">❌</label>
                                                <div className="fav-details">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa possimus quod molestias, eius et neque ut aliquid provident aut quaerat ratione qui nobis minus delectus nostrum sint voluptas tenetur.</p>
                                                </div>
                                                <div className="counter">
                                                    <div className="count">
                                                        <button onClick={()=>setCount(count-1)}>-</button>
                                                        <p>{count}</p>
                                                        <button onClick={()=>setCount(count+1)}>+</button>
                                                    </div>
                                                    <button onClick={updateCart} value={data.productId}>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default FavouriteItems
