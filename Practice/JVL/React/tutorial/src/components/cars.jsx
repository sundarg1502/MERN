import "./cars.css"

function Car(props){
    const {carObj} =props
    const {name, color} =carObj
    return (
        <>
            <h1 className="car-header">Car Component : <span className="car-info">{color} {name}</span> Car</h1>
        </>
    )
}
export default Car