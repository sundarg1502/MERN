import { useState } from "react";
import "/src/styles/signin.css"
import axios from "axios"

const Signin = () => {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  // const valid 

  // const handleSignIn = (e)=>{
  //   e.preventDefault();
  //   if(name==="" || name==Nan){

  //   }
  // }                    
  // axios.get("http://localhost:8000/users")      
  // .then(Response=>console.log(Response))                    
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
