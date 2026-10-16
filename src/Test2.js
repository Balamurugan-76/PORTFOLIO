import React from 'react'
import { useState } from 'react'

const Test2 = ({res}) => {
    const[error,setError] = useState({
        usernameError : "",
        passwordError : ""
    })

    function change(event) {
        setData({
            ...data,
            [event.target.name]: event.target.data
        })
    }

    const handling = (e) => {
        e.preventDefault();

        setError({
            ...error,
            usernameError : res.username === "" ? "username incorrect" : "",
            passwordError : res.password === "" ? "password incorrect" : ""
        })

        // if (error.usernameError === "" && error.passwordError === "") {
        //     console.log("Form submitted successfully!");
      
        // }

    }


  return (
    <div>
        <form onSubmit={handling}>
            <label style={{marginrigth:"5%"}}>Username</label><br />
            <input  type='text' placeholder='Enter your Username' onChange={change}/><br />
            <span style={{color: "red"}}>{error.usernameError}</span><br />

            <label>Password</label><br />
            <input  type='password' placeholder='Enter your Password' onChange={change} /><br />
            <span style={{color: "red"}}>{error.passwordError}</span><br />

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Test2;