function FormExample(){
    function handleSubmit(event){
        // event.preventDefault();
        console.log("Event object "+event)
        // for(let item of event){
        //     console.log(item)
        // }
        event.map(obj=>console.log(obj.name))
        alert("Form Submitted")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>UserName</label><input type="text" placeholder="Enter Your Name" name="user" ></input><br></br>
            <label>PassWord</label><input type="password" placeholder="Enter Your password" name="pass"></input><br></br>
            <button>submit</button>
        </form>
    )
}
ReactDOM.render(<FormExample/>,document.getElementById('root'))