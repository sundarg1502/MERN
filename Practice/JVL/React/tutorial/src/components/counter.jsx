import { useState, useEffect } from "react"
import "./Counter.css"


function Counter(){
    const [count , setCount] = useState(1)
    const [app, setApp] = useState(0)
    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                    if(count%60==0){
                        setApp((previousState)=>{return app+1})
                        setCount(1)
                    }
                    else{
                        setCount((previousState)=>{return count+1})
                    }
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
    // console.log(app.ss)
    return (
        <div className="counter-container">
            <h1>
                Counter Application {sec}
            </h1>
        <div className="count">
            <p>0{app} </p>
            {String(count).length <=1 ? <p>0{count}</p>:<p>{count}</p>}

        </div>
            {/* <button onClick={()=>(setCount((previousState)=>{return previousState+1}))}>Counter</button> */}
        </div>
    )
}

export default Counter