function UserList(){
    const users = [{
        id : 1,
        name : "XXX",
        age:21
    },{
        id : 2,
        name : "YYY",
        age:25
    },{
        id : 3,
        name : "ZZZ",
        age:34
    }]
    return(
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {
                users.map(user=>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>    
                </tr>
                )
            }
        </table>
        // <ul>
        //     {
        //         users.map(user=><li>{user.id} - {user.name} - {user.age}</li>)
        //     }
        // </ul>
    )
}
ReactDOM.render(<UserList />,document.getElementById('root'))