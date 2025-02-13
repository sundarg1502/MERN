import { useState } from "react"
import "/src/styles/signup.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const SignUp = () => {
    // const [userName, setUserName] = useState("")
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [passWord, setPassword] = useState("")
    // const [confirmpass, setConfirm] = useState("")
    const [inputs, setInputs] = useState({
      userName:"",
      name:"",
      email:"",
      passWord:"",
      confirmpass:""
    })

    const [valid, setVAlid] = useState("")
    const [error, setErrors] = useState({})

    const navigate = useNavigate()

    const updateData = (event)=>{
        var fieldName = event.target.name
        var fieldValue = event.target.value
        setInputs((previousState)=>{
          return {...previousState,[fieldName]:fieldValue}
        })
    }

    const handleSignUp = (e)=>{
        e.preventDefault();
        var isValid = true
        const validationError = {}
        if (inputs.userName===""){
          isValid = false
          validationError.userName = "Enter a Valid User Name"
        }
        if (inputs.name===""){
          isValid = false
          validationError.name = "Enter a Name"
        }
        if (inputs.email===""){
          isValid = false
          validationError.email = "Enter you Email"
        }
        if (inputs.passWord===""){
          isValid = false
          validationError.passWord = "Enter a password"
        }
        if(inputs.passWord<6){
          isValid = false
          validationError.passWord = "PassWord Needs to be greater than 6 Charectors"
        }
        if (inputs.confirmpass===""){
          isValid = false
          validationError.confirmpass = "Enter a Confirm PAssword"
        }
        if(inputs.passWord!==inputs.confirmpass){
          isValid = false
          validationError.confirmpass = "Password and confirmation passwords needs to be same"
        }
        setVAlid(isValid)
        setErrors(validationError)
        // navigate("/signin")
        if(Object.keys(validationError).length===0){
          axios.post("http://localhost:8000/users",inputs)
          .then(navigate("/"))
          .catch(err=>
            {
              isValid=false
              validationError.ConnectionError=err.message
              setVAlid(isValid)
              setErrors(validationError)
              console.log("Error from api ",err.message)
            })
        }
    }

  return (
    <div className="signup">
      <h1> Sign Up </h1>
      {
        valid?<></>:<span className="error">
          {Object.values(error).join(" | ")}
        </span>
      }
      <div className="forms">
        <input type="text" placeholder="Enter User Name" name="userName" onChange={updateData}/>
        <input type="text" placeholder="Enter Your Name" name="name" onChange={updateData}/>
        <input type="text" placeholder="Enter Yoour Email" name="email" onChange={updateData}/>
        <input type="text" placeholder="Enter PAssword" name="passWord" onChange={updateData}/>
        <input type="text" placeholder="Confirm Your PAssword" name="confirmpass" onChange={updateData}/>
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUp
