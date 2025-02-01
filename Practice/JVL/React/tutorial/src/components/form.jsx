import { useState } from "react"

export default function FormHandling(){
    const [data, setData] = useState({email:"@gmail.com"})

    const changeData = (e)=>{
        const name = e.target.name
        setData(         
            (previousState)=> {return {...previousState,[name]:e.target.value}}
        )
    }

    function HandleForm(event){
        event.preventDefault()
        const isData = data.name !=="" && data.email !== "" && data.phone !==""
        console.log("Form Submitted",data,isData)
    }
    return(
        <>
            <form onSubmit={HandleForm}>
                <h1>Registration Form</h1>
                <label>Name : <input typeof="text"  name="name" value={data.name} onChange={changeData}></input></label><br></br>
                <label>E-mail : <input typeof="text" name="email" value={data.email} onChange={changeData}></input></label><br></br>
                <label>Phone : <input typeof="text" name="phone" value={data.phone} onChange={changeData}></input></label><br></br>
                <input type="Submit"></input>
            </form>
        </>
    )
}