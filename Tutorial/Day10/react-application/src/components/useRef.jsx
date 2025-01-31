import React, {useRef} from "react";

const USeRefExample= ()=>{
    const inputRef = useRef(null);

    const focusInput=()=>{
        inputRef.current.focus();
    }
    return (
        <div style={{margin:"100px"}}>
            <input ref={inputRef} type="text" placeholder="Focus"></input>
            <button onClick={focusInput} style={{color:"red"}}>Click Here</button>
            
        </div>
    )
}

export default USeRefExample