function Header(){
    return(
        <div className="header" style={{background:"linear-gradient(black,pink,yellow)"}} >
            <ul style={{display:"flex",gap:"20px",listStyle:"none"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Header