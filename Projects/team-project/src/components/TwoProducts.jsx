import "/src/styles/Two.css"

const TwoProducts = () => {
    return (
        <div className="parent">

            <div className="pic-container">
                <div className="cake">
                    <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/banner-one/one.png"></img>
                </div>
                <div className="pic">
                    <h2>Tasty Snack<br></br>& Fast food </h2>
                    <p>The flavour of something</p>
                    <p>special</p>
                    <div className="to">
                        <button type="Shop ">Shop Now</button>
                    </div>

                </div>


            </div>

            <div className="pic-container">
                <div className="cake">
                    <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/banner-one/two.png"></img>
                </div>
                <div className="pic">
                    <h2>Fresh Fruits<br></br>& Vegetables </h2>
                    <p>A healthy meal for every</p>
                    <p>one</p>
                    <div className="to">
                        <button type="Shop ">Shop Now</button>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default TwoProducts
