import { useState } from "react"
import "/src/styles/signup.css"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [userName, setUserName] = useState("")
    const [passWord, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSignUp = (e)=>{
        e.preventDefault();
        if (!userName || !passWord){
            alert("Enter Credentials")
            return;
        }
        localStorage.setItem("username",userName)
        localStorage.setItem("password",passWord)
        alert("Sign Up successfull")
        navigate("/signin")
    }
  return (
    <div className="signup">
      <h1>Sign Up </h1>
      <div className="forms">
        <input type="text" placeholder="Enter User Name" onChange={(e)=>{setUserName(e.target.value)}}/>
        <input type="text" placeholder="Enter PAssword" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUp
