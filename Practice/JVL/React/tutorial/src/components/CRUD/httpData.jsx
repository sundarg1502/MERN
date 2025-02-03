import { useEffect, useState } from "react"
// import {Button, EditableText} from "@blueprintjs/core"

export default function UserData(){
    const [users, setUsers] = useState([])
    
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=> response.json())
            .then((json)=> setUsers(json))
        },[]
    )
    console.log(users)
    return(
        <>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E Mail</th>
                    <th>Website</th>
                    <th>Action</th>
                </thead>
                <tbody>
                   { users.map(
                        (user)=>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td><input type="email" name="email" value={user.email} contenteditable="true"/></td>
                                <td>{user.website}</td>
                                <td>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}                         