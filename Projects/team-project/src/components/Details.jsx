import "/src/styles/Details.css" 

const Details = () => {
  return (
    <div className='details-container'>
        <div className="image-container">
            <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/17.jpg" alt="" />
        </div>
        <div className="cotent-container">
            <h1>Mix nuts premium quality organic dried fruit 250g pack</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat deleniti, dolores obcaecati rem cum commodi accusamus quo quae quidem.</p>
            <div className="rate">
                <p>$50 <del>$62</del></p>
            </div>
            <div className="quantity">
                <button>250g</button>
                <button>500g</button>
                <button>1Kg</button>
                <button>2Kg</button>
            </div>
            <div className="cart-details">
                <div className="counter-container">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <button> 🛒 Add To Cart </button>
            </div>
        </div>
    </div>
  )
}

export default Details
