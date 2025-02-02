import { useEffect, useState } from "react";

const actualNumber = Math.floor(Math.random()*10)+1

export default function GuessTheNumber(){
    const [number, setNumber] = useState(0)
    const [result, setResult] = useState("")
    // const [trial, setTrial] = useState(0)
    console.log(actualNumber)
    useEffect(
        ()=>{
            if (number==actualNumber){
                setResult("You Are Correct")
            }
            else if(number<actualNumber){
                setResult("Your Guess is below the actuall Number")
            }
            else{
                setResult("Your Guess is above the actualll number")
            }
        },[number]
    )

    // useEffect(
    //     ()=>setTrial(
    //         (previousState)=>{return previousState+1}
    //     )
    //     ,[result]
    // )
    return(
        <div className="Guess">
            <h1>Guess a Number between 1 t0 10</h1>
            {/* <h4>Trials You made {trial}</h4>  */}
            <input type="number" onChange={(event)=>{setNumber(event.target.value)}}></input>
            <p>Result {result}</p>
        </div>
    )
}