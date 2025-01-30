import ValidateForm from "./validate"
import login from "./login.jpg"


function FormHandling(){
    return (
        <div className="form">
            <img src={login} alt="" className="login-img" />
            <form >
                <input type="text" placeholder="Enter Your Name" name="user" ></input><br></br>
                <input type="password" placeholder="Enter Your password" name="pass"></input><br></br>
                <button onClick={ValidateForm} className="submit-btn">submit</button>
            </form>
        </div>
    )
}
export default FormHandling