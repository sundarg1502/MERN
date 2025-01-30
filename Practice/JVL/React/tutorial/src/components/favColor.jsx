import { useState } from "react"  

function FavouriteColor(){
    // var color = "Yellow"
    const [color, setColor] = useState("blue")
    return(
        <>
            <h2>My fav colour is <span style={{color:{color},backgroundColor:"green"}}>{color} </span></h2>
            <button onClick={()=> {setColor("red")}}>Red</button>
            <button onClick={()=> {setColor("yellow")}}>Yellow</button>
        </>
    )
}

export default FavouriteColor