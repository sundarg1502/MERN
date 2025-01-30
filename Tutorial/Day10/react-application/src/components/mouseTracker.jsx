import React,{ useState } from "react";

const Mouse = (props)=>{
    const [position,setPosition] = useState({x:0,y:0})
    const handleMouseMover = (event)=>{
        setPosition({x:event.clientX,y:event.clientY})
    }
    return (
        <div onMouseMove={handleMouseMover} style={{height:"150px",width:"550px",border:"2px solid red"}}>
            {props.render(position)}
        </div>
    )
} 
export default Mouse;