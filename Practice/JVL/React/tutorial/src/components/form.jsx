import {useState} from "react"

function UserForm(){
    const [name, setName] = useState("None")

    function asyncChange(event){
        setName(event.target.value)
    }
    console.log(name)

    function submitForm(event){
        event.preventDefault()
        console.log("Form Submitted",{name})
    }
    return(
        <div>
            <h1>User Form for Form validations</h1>
            <form onSubmit={submitForm}>
                <label>Name<input type="text" onChange={asyncChange} value={name}></input></label>
                <input type="Submit"></input>
            </form>
        </div>
    )
}
export default UserForm