import React from 'react'
import { Route, Routes, Link } from 'react-router';
import Login_Task from './Login_Task';
import Contact_Task from './Contact_Task';
import About_Task from './About_Task';
import Accordian_Task from './Accordian_Task';
import Skills_Task from './Skills_Task';
import Project_Task from './Project_Task';

function Home_Task() {
    const data = [{
        id: "29",
        name: "Balamurugan",
        username: "balamurugan-76",
        contact: "6381291956",
        email:"pbala7097@gmail.com",
        role: "Student",
        skill:["java","python","mern"],
        location: "chinnasalem",
        projects:[
            {title:"Task Manager", discription:" Task Management Dashboard"},
            {title:"Student Management", discription:"Managing Student Records"},
            {title:"Shopping Cart", discription:"Simple Shopping Webpage"}
        ],
        social: {}, 
        accordian: [{}],
    }]
  return (
    <>
    <Link to="/Login_Task">Login</Link>&nbsp;
    <Link to="/Project_Task">Project</Link>&nbsp;
    <Link to="/Skills_Task">Skills</Link>&nbsp;
    <Link to="/Accordian_Task">Accordian</Link>&nbsp;
    <Link to="/Contact_Task">Contact</Link>&nbsp;
    <Link to="/About_Task">About</Link>
    

    <Routes>
        <Route path='/Login_Task' element={<Login_Task/>}></Route>
        <Route path='/Project_Task' element={<Project_Task/>}></Route>
        <Route path='/Skills_Task' element={<Skills_Task/>}></Route>
        <Route path='/Accordian_Task' element={<Accordian_Task/>}></Route>
        <Route path='/Contact_Task' element={<Contact_Task/>}></Route>
        <Route path='/About_Task' element={<About_Task/>}></Route>
    </Routes>
    </>
  )
}

export default Home_Task