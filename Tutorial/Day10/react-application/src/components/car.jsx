import { useState } from "react"

function Cars(){
    const [car, setCar] = useState({
        name:"Ford",
        color:"Red",
        model:"XXX"
    })
    function changeCar(){
        setCar((previousState)=> {
            return {...previousState,name:"audi"
            }
            })
    }
    // const [color, setColor] = useState("blue")
    // const [name, setName] = useState("Ford")
    return (
    <>
        <h1>Car Details</h1>
        <ul>
            <li>Car Name {car.name} Colour {car.color}</li>
        </ul>
        <button onClick={changeCar}>Color</button>
        {/* <button onClick={()=> setName("Audi")}>Name</button> */}
    </>)
}

export default Cars