class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        console.log(props)
    }
    render(){
        return (
        <h3>Current Count {this.state.count} </h3>
     )
    }
}
ReactDOM.render(<Counter />,document.getElementById('root'))
