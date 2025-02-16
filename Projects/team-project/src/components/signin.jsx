import { useState } from "react";
import "/src/styles/signin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [errors, setErrors] = useState(false)
  const [invalidData, setinvalidData] = useState({})
  const navigate = useNavigate()

  const handleSignIn = (e)=>{
    e.preventDefault();
    var setinvalid = {}
    if(name===""  && pass==""){
        alert("Enter User nAme And Password")
    }
    else{
      axios.get("http://localhost:8000/users")      
      .then(Response=>{
        for (var data of Response.data){
          if (data.name === name){
            console.log(data.name)
            if (data.passWord=== pass){
              alert("Login Successfull Redirect to Dashboard")
              navigate("/")
              break
            }
            else{
              setinvalid.passMisMatch = "Password doesnt Match "
              setErrors(true)
              break
            }
          }
          else{
            setinvalid.nameNotFound = "User Name doesnot Avilable"
            // console.log("Name not Foutnfd")
            setErrors(true)
            console.log(invalidData)
          }
        }
        setinvalidData(setinvalid)
      })     
      .then(error=>console.log(error))               
    }
  }  
  console.log(invalidData)                  
  return (
    <div className="signin">
      <h1>Sign In Form</h1>
      { errors && <span>
        {Object.values(invalidData).join(" | ")}
        </span>}
      <div className="forms">
        <input type="text" placeholder="Enter User Name" onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="Enter PAssword" onChange={(e)=>setPass(e.target.value)}/>
      </div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default Signin
