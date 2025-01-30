function WithBorder(wrapper){
    const message = wrapper
    return function EnhancedComponent(props){
        const {property} = props
        console.log(props)
        return(
            <div style={{border:"2px solid red",
                padding:"30px"
            }}>
                <h1>I`m Fine {wrapper} {property}</h1>
                {/* <WithBorder {...props}/> */}
            </div>
        )
    }
}
const Enhanced = WithBorder("Message 2") 
ReactDOM.render(<Enhanced  />,document.getElementById('root'))