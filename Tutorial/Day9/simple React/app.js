class CLickButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { message : "Click The Button" };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({message:"Button Clicked"});
    }
    render(){
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

 
ReactDOM.render(<CLickButton/>,document.getElementById("buttons"))