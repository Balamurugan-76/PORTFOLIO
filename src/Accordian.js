import React from "react";
import'./Accordian.css'
import { useState } from "react";

const Accordian = () => {
    const [open,setOpen] = useState(null) 

    const accor = [
        {id: 1 , title: "Accordian 1" , para: "paragraph 1"},
        {id: 2 , title: "Accordian 2" , para: "paragraph 2"}
    ]

    function handleId (id) {
        console.log(id)
        //setOpen(id)
        setOpen(open == id ? null : id)
    }

    return (
        <>
        {/* <p className="head" onClick={expend}>Accordian 1</p>
        {open ? <ppaaragraph 1</p> : ""}
        <p className="head">Accordian 2</p> 
        <p>paragraph 2</p> */}
         
         {
            accor.map((res) => {
                return (
                    <>
                    <p className="head" onClick={() => handleId(res.id)} >{res.title}</p>
                    {open == res.id ? <p>{res.para}</p> : ""}
                    
                    </>
                )
            })
         }
        </>
    )
}
export default Accordian;