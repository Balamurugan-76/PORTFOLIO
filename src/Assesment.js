import React from 'react'
import { useState } from 'react'


function Assesment() {
    const [dark,setDark] = useState(false)
    const [task,setTask] = useState("")
    const [tasks,setTasks] = useState("")
    const addTask = () => {
        if (task === "") {
            alert("Enter a task");
        } else {
            setTasks([...tasks, 
            { name: task, done: false }]);
            setTask("");
        }
    };
    
    const [ opens,setopens]=useState(null)
        
            const acc=[
                {id:1,topic:"How to use this app",para:"React (also known as React.js or ReactJS) is a popular, open-source JavaScript library used for building dynamic and interactive user interfaces (UIs). Developed by Meta (formerly Facebook) in 2013, it has become one of the most widely used technologies for modern front-end web development. "},
                
        
            ]
            function handleId(id){
                 
                setopens(opens == id ? null : id)
            }

  return (
    <div style={{background: dark ? "black" : "white" , color: dark ? "white" : "black" , height:"100vh" , padding: "10%"}}>

        <span style={{marginLeft:"96%" , cursor:"pointer"}}onClick={() => setDark(!dark)}>{dark ? "☀️" : "⏾"}</span>
        <h1 style={{marginLeft:"10%"}}>Task Management Dashboard</h1>
        <h2>Welcome Balamurugan 👋 </h2>
        
        <hr />
        <h3>Total task :</h3>
        <h3>Completed task:</h3>
        <h3>Pending task:</h3>
        <hr />

        <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task"/>
        <button onClick={addTask}>Add Task</button>

        <h2>My task</h2>

        
        
    </div>
  )
}

export default Assesment