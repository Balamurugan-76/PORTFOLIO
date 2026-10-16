import React from "react";
import Paper from "@mui/material/Paper";
import  TextField from '@mui/material/TextField';

function Student({ student }) {
  return (
    <div>
        <Paper elevation={7} style={{width:"25%", textAlign:"center", marginLeft:"35%",marginTop:"7%", height:"40vh" }}>
            <h2>Student Information</h2>
            <div style={{display:"flex", flexDirection:"column", gap:"10px",marginLeft:"15%", padding:"10px",width:"50%"}}>
            <TextField id="filled-helperText"
                label="NAME :"
                defaultValue={student.name}
                variant="filled"
            /><br />
             <TextField id="filled-helperText"
                label="DEPARTMENT :"
                defaultValue={student.department}
                variant="filled"
            />
            </div>
           
      </Paper>
    </div>
  );
}

export default Student;
