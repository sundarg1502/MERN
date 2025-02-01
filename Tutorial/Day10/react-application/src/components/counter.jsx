import { useState, useEffect } from "react"

function Counter(){
    const [count , setCount] = useState(0)
    const [app, setApp] = useState({hh:0,mm:0,ss:0})
    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                    setApp((previousState)=>{return previousState.ss+1})
                },1000
            )
        },[count]
    )
    // setApp(
    //     (previousState=>{
    //         return ({...previousState,mm:{app.mm+1 ?count%10==0:}})
    //     })
    // )
    var sec = count%10===0
    console.log(app.ss)
    return (
        <>
            <h1>
                Counter Application {sec}
            </h1>
            <p>{app.hh} : {app.ss} : {count}</p>
            {/* <button onClick={()=>(setCount((previousState)=>{return previousState+1}))}>Counter</button> */}
        </>
    )
}

export default Counter