import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Getdata = () => {
    const [data,setData] = useState([]);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {setData(res.data)})
    },[])
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
    
     {data.map((i) => {
        return (
            <>
            <tbody>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    </tr>
            </tbody>
            
            </>
        )
     })}
     </table>
    </>
  )
}

export default Getdata