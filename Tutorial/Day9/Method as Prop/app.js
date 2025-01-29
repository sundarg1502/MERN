function ChildComponent({handler} ){
    return <button onClick= {handler}>Greet parent</button>
}
function ParentComponent(){
    function greet(){
        alert("Button Clicked")
    }
    return (
        <div>
            <h2>Mehtthod Called</h2>
            
            <ChildComponent handler={greet} />
        </div>
    )
}
ReactDOM.render(<ParentComponent/>,document.getElementById('root'))