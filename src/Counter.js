import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const btn = {
        padding:"10px",
        border:"none",
        borderRadius:"10px",
        background:"blue",
        color:"white",
        cursor:"pointer",
        margin:"5px"
    }

    //without dependency
    // useEffect (() => {
    //     document.title = "Counter";
    // },[])

    // //With dependency
    // useEffect (() => {
    //     document.title = count
    // },[count])

    // //Empty dependency
    // useEffect (() => {
    //     setCount(42)
    // })

    function timeout () {
        setTimeout(() => {
            console.log("test")
        },3000)

    }

    function interval () {
        setInterval(() => {
            console.log("interval test")
        },500)

    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Count: {count}</h1>
        <button style={btn} onClick={() => setCount(count + 1)} > INCREMENT </button>
        <button style={btn} onClick={() => setCount(count - 1)} > DECREMENT </button>
        <button style={btn} onClick={() => setCount(0)}>RESET</button>

        <button style={btn} onClick={timeout}>TIMEOUT</button>
        <button style={btn} onClick={interval}>INTERVAL</button>
    </div>
  )
}

export default Counter