import Counter from "./Counter"
import "/src/styles/Deals.css"

const Deals = () => {
  return (
    <div className='deals'>
        <div className="deals-header">
            <div className="deals-title">
                <h1>
                    Day of the <span>Deal</span>
                </h1>
                <p>
                    Dont`t Wait. The time will never be just right
                </p>
            </div>
            <div className="deals-counter">
                <Counter/>
            </div>
        </div>
        <div className="cards">
            <div className="card">
                <img src="" alt="" />
                <div className="hidden-features">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="card-details">
                    <h1>Name <span>⭐⭐⭐⭐⭐</span></h1>
                    <p>Mixed Fruit</p>
                    <div className="card-rate">
                        <p>$25 <strike>$30</strike></p>
                        <p>1 Pack</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="" alt="" />
                <div className="hidden-features">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="card-details">
                    <h1>Name <span>⭐⭐⭐⭐⭐</span></h1>
                    <p>Mixed Fruit</p>
                    <div className="card-rate">
                        <p>$25 <strike>$30</strike></p>
                        <p>1 Pack</p>
                    </div>
                </div>
            </div><div className="card">
                <img src="" alt="" />
                <div className="hidden-features">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="card-details">
                    <h1>Name <span>⭐⭐⭐⭐⭐</span></h1>
                    <p>Mixed Fruit</p>
                    <div className="card-rate">
                        <p>$25 <strike>$30</strike></p>
                        <p>1 Pack</p>
                    </div>
                </div>
            </div><div className="card">
                <img src="" alt="" />
                <div className="hidden-features">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="card-details">
                    <h1>Name <span>⭐⭐⭐⭐⭐</span></h1>
                    <p>Mixed Fruit</p>
                    <div className="card-rate">
                        <p>$25 <strike>$30</strike></p>
                        <p>1 Pack</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deals    