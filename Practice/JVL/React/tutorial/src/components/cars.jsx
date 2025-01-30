function Car(props){
    const {carObj} =props
    const {name, color} =carObj
    return (
        <>
            <h1>Car Component : {color} {name} Car</h1>
        </>
    )
}
export default Car