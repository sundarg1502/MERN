import React,{useState, useMemo} from "react";

const UseMemoExample = ()=>{
     console.log("testing...")
     const [count, setCount] = useState(0)
     const [input,setInput] = useState("")

     const expensiveCalc = (n)=>{
        console.log("Calcualtion ....")
        for (let i=0;i<1000;i++){
            // setCount()
        }
        return n*2;
     }

     const computed = useMemo(()=>
        expensiveCalc(count),)

     return (
        <div>
            <h1>Memo example</h1>
            <h1>Count Value{count}</h1>
            <h1>Computed Value {count} : {computed}</h1>
            <button onClick={()=> setCount(count+1)}>Increase Count</button>
            <div>
                <input type="text" value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Type Something"/>

                <p>Text Input {input}</p>
            </div>
        </div>
     )
}

export default UseMemoExample