import React from "react";
import EmployeeSkills from "./EmployeeSkills";
import Paper from "@mui/material/Paper";
import  TextField from '@mui/material/TextField';
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MailIcon from '@mui/icons-material'
function EmployeeCard({ employee }) {
  return (
    <div>
        <Paper elevation={7} style={{width:"25%", textAlign:"center", marginLeft:"35%",marginTop:"7%", height:"50vh" }}>
            <div style={{display:"flex", flexDirection:"column", gap:"10px",marginLeft:"15%", padding:"30px",width:"60%"}}>
                <h2 >Employee Details</h2>
            <TextField id="filled-helperText"
                label="NAME :"
                defaultValue={employee.name}
                variant="filled"
            />
             <TextField id="filled-helperText"
                label="ROLE :"
                defaultValue={employee.role}
                variant="filled"
            />
            <TextField id="filled-helperText"
                label="SALARY :"
                defaultValue= {employee.salary}
                variant="filled"
            />
            </div>
           
      </Paper> 
      <IconButton aria-label="show 4 unread messages">
      <Badge badgeContent={4} color="primary">
      <MailIcon />
      </Badge>
      </IconButton>    
    </div>
  );
}

export default EmployeeCard;