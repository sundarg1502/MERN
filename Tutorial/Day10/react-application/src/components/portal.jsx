import React from "react"
import ReactDOM from "react-dom"
import "./portal.css"

const PortalExampl = ({message,onClose})=>{
    return (
        ReactDOM.createPortal(
            <div className="overlay">
                <div className="model">
                    <h2>Portal Mode</h2>
                    <p>{message}</p>
                    <button onClick={onClose} className= "button">Close</button>
                </div>
            </div>, document.getElementById('root')
        )
    )
}

export default PortalExampl