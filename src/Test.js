import React from 'react'
import { useState } from 'react'

const Test = () => {
    const [dark,setDark] = useState(false)
    const [birthyear,setBirthyear] = useState('')
    const [age,setAge] = useState(null)
    const [min,setMin] = useState(0)
    const [max,setMax] = useState(100)
    const [random,setRandom] = useState(null)

    const currentYear = 2026;
    const yearNum = Number(birthyear);

    const handleClaculate = (e) => {
        e.preventDefault()
        setAge(null)
        
        const calculateAge = currentYear - yearNum;
        setAge(calculateAge);
    }

    const generateRandom = (e) => {
        setRandom (random);

        const minNum = Number(min);
        const maxNum = Number(max);
    }

  return (
    <div style={{background: dark ? "black" : "white" , color: dark ? "white" : "black" , height:"100vh" , padding: "10%"}}>

        <span style={{marginLeft:"50%" , cursor:"pointer"}}onClick={() => setDark(!dark)}>{dark ? "☀️" : "⏾"}</span>

        <form  onSubmit={handleClaculate}>
            <label>Enter Birth Year</label><br />
            <input  placeholder='Birth year' onChange={(e) => setBirthyear(e.target.value)} /><br />
            <button type='submit'>Calculate Age</button>
        </form>
        <h4>your approximate age is :{age} </h4>

        <hr />
        <form>
            <label>Minimum value </label><br />
            <input type='number' onChange={(e)=> {setMin(e.target.value)}} /><br />

            <label>Maximum value</label><br />
            <input type='number' onChange={(e)=>{setMax(e.target.value)}} />
            <button type='submit'>Generate</button>
        </form>
        <h4>Generated Number is :{random}</h4>
        
    </div>
  )
}

export default Test