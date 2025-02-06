import { useState } from "react";
import "/src/styles/signin.css"

const Signin = () => {
  const username = localStorage.getItem("username")
  const password = localStorage.getItem("password")
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const handleSignIn = (e)=>{
    e.preventDefault();
    if(name==username && password==pass){
      alert("Login Sccuessfull")
    }
    else{
      alert("USername PAss word Mismatched")
    }
  }                                              
  return (
    <div className="signin">
      <h1>Sign In Form</h1>
      <div className="forms">
        <input type="text" placeholder="Enter User Name" onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="Enter PAssword" onChange={(e)=>setPass(e.target.value)}/>
      </div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default Signin
