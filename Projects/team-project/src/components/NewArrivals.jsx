import { useEffect, useState } from "react"
import axios from "axios"
import "/src/styles/Newarrivals.css"
 
const NewArrivals = () => {
    const [products, setProducts] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:8000/Product")
        .then(response=>setProducts(response.data))
        .then(error=>console.log(error))
    },[]
)
console.log(products)
  return (
    <div className="new-arrivals">
        <div className="arrival-container">
            <div className="arr-content">
                <h2>New <span>Arrival</span></h2>
                <p>Shop Online For New Meterial</p>
                <div className="arr-nav">
                    <ul>
                        <li>All</li>
                        <li>Snacks</li>
                        <li>Fruits</li>
                        <li>veg</li>
                    </ul>
                </div>
                <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h2>{product.name}</h2>
          <p>Category: {product.Category}</p>
          <p>Old Price: {product["Old price"]}</p>
          <p>New Price: {product["New Price"]}</p>
          <p>Quantity: {product.Quantity}</p>
          {product.image && <img src={product.image} alt={product.name} />}
        </div>
      ))}</div>
                <div className="arr-products">
                    {/* {products.map(data=>(
                        <h2>{data.name} </h2>
                    ))} */}
                    <div className="product">
                        <img src="https://maraviyainfotech.com/projects/blueberry-html/blueberry-html/assets/img/new-product/11.jpg" alt="" />
                        <div className="details">
                            <h2>Veg <span>⭐⭐⭐⭐⭐</span></h2>
                            <h1>Tomato</h1>
                            <div className="price">
                                <p>$15 <del>$22</del></p>
                                <p>500g</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrivals      