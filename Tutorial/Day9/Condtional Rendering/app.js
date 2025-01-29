function Welcome(props){
    return <h3>Welcome {props.name} <br></br>Age is {props.age}</h3>
}
ReactDOM.render(<Welcome name="Jhon" age="21" />,document.getElementById("root"))