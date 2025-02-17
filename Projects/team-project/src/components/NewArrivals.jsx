import { useEffect, useState } from "react"
import axios from "axios"
import "/src/styles/Newarrivals.css"

const NewArrivals = () => {
    const [products, setProducts] = useState({})
    const [fetchData, setFetach] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/Product")
            .then(response => {
                setProducts(response.data)
                setFetach(true)
            })
            .then(error => console.log(error))
    }, []
    )
    console.log(products)
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
                                    <img src={product.image} alt="" />
                                    <div className="options">
                                        <p>Heart</p>
                                        <p>Eye</p>
                                        <p>Loop</p>
                                        <p>Cart3</p>
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