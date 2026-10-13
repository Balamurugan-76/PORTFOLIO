import React from "react";
import { useState } from "react";


function Header(){

    const [status,setStatus] = useState("offline");
    const ctime = new Date().toLocaleTimeString();
    const cdate = new Date().toLocaleDateString();
    console.log(ctime);
    console.log(cdate);

    if(ctime>="4:08:00 pm" && status != "grey"){
        return(
            setStatus("grey")
        );
    }
    
    return(
        <>
        <div style = {{width : "100%" , height : "100vh" , backgroundColor : status}}>
           {status}
           <button disabled = {status == "grey" ? true : false}>test</button>
        </div>
            
        
        </>
    );
}

export default Header;