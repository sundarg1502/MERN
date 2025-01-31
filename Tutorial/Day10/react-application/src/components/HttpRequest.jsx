import React,{useState,useEffect} from "react"

const HttpRequestExample = ()=>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            setUsers(data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log("Error Fetching Data form the api")
            setLoading(false)
        })
    },[])
    console.log(users)
    return (
        <div className="http-content">
            <h1> User Data From API </h1>
            {loading && <p className="load">Data Loading.....</p>}
            {/* <ul>
                {users.map((user)=><li>{user.name}</li>)}
            </ul> */}
            <table >
                <thead>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>E-Mail</th>
                    <th>City</th>
                    <th>Website</th>
                </thead>
                <tbody>
                    {users.map((user)=>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                             <td>{user.website}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )


}
export default HttpRequestExample