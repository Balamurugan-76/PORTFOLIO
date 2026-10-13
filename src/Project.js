import React from "react";
import { useState } from "react";
import './Project.css';

const Project =() => {
    const [value,setValue] = useState ({
        id: 1,
        name: "Bala",
        age: 40,
        email:"bala123@gmail.com"
        
    }
);
const [form,setForm] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
    
})

function change(event) {
  setValue({
    ...value,
    [event.target.name]: event.target.value
    })
}

// function age (e) {
//     setValue({
//         ...value,
//         age:e.target.value
//     })
// }

// function email (e) {
//     setValue({
//         ...value,
//         email:e.target.value
//     })
// }

function submit (event) {
    event.preventDefault();
    setForm({
        ...form,
        name:value.name , 
        email:value.email,
        age:value.age     
    })
}

    // const [input,setInput] = useState("your data will be visible here");
    // const [email,setEmail] = useState("");
    // const [age,setAge] = useState("");
    // // const add =() =>{
    // //     setValue(value + 2);
    // // }
    // // const sub =() =>{
    // //     setValue(value - 1);
    // // }

    // const inc =() =>{
    //     // if(value == 0){
    //     //     setValue(1);
    //     // }
    //     // else{
    //     //     setValue(0);
    //     // }
    //     // setValue(value == 0 ? 1 : 0)
    //     setValue(!value)
    // }
    // console.log(value)

    // function getdata(event) {
    //     setInput(event.target.value);
    // }

    // function emaily (event){
    //     setEmail(event.target.value);
    // }

    // function agee (event) {
    //     setAge(event.target.value)
    // }
    
    // function handleSubmit (event) {
    //     event.preventDefault();
    //     alert(input)
    //     alert(email)
    //     alert(age)
    //}

    
    return (
        <>
        {form.name}<br />
        {form.email}<br />
        {form.age} 
        
        <form onSubmit={submit}>
            Name : <input onChange={change} name={"name"} placeholder="Enter your name"/><br />
            Email : <input onChange={change} name={"email"} placeholder="Enter your email"/><br />
            Age : <input onChange={change} name={"age"} placeholder="Enter your age"/><br />
            <button type="Submit">Submit</button>
        </form>
        
        </>
    )
}

export default Project;