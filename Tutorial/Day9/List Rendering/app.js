function List(){
    const arr = ['XXX',"YYY","ZZZ"]
    return (
        <div>
            <h2>List Rendering</h2>
            <ul>
            {
                arr.map(random=><li>{random}</li>)
            }       
            </ul>
        </div>
    )
}
ReactDOM.render(<List/>,document.getElementById("root"))