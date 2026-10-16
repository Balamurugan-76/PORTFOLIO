// import logo from './logo.svg';
// import './App.css';
// // import Counter from './Counter';
// // import Getdata from './Getdata';
// // import Errorhandling from './Errorhandling';
// // import Girls from './Girls';
// // import Boys from './Boys';
// // import Home from './Home';
// // import { Routes, Route, Link } from 'react-router';
// // import shirt from './asset/shirt.webp';
// // import pant from './asset/pant.webp';
// // import adidas from './asset/adidas.jpg';
// // import watch from './asset/watch.webp';
// // import toys from './asset/toys.webp'
// // import dress from './asset/dress.webp'
// // import chain from './asset/chain.jpg'
// // import gwatch from './asset/gwatch.webp'
// // import bag from './asset/bag.webp'
// // import slipper from './asset/slipper.webp'

// // import Home_Task from './Task/Home_Task';
// import Test2 from './Test2';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Getdata from './Getdata';

// function App() {
//   const [data,setData] = useState([])
//   useEffect (() => {
//     axios.get("https://dummyjson.com/c/e2d7-5698-4370-bbf7")
//     .then((res) => console.log(res.data))
//     .then((res) => setData(res.data))
//   }, [])



  
  
//   return (
//     <>
//         {/* <Accordian/> */}
//         {/* <ModelBox/> */}
//         {/* <Object/>*/}
//         {/* <Project/> */}
//         {/* <Accordian1 /> */}
//         {/* <Assesment/> */}
//         {/* <Errorhandling /> */}
//         {/* <Bala/> */}
//         {/* <Test2 /> */}
//         <Getdata/>
        
//      {/* this is to test the page is working or pull is working */}      
         
//     </>
    
//   )
// }

// export default App;

//import React from "react";
// import FormControl from '@mui/material/FormControl';
// import  TextField from '@mui/material/TextField';
// import Paper from "@mui/material/Paper";
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const App = () => {

//   return(
//     <div>
//       <Paper elevation={7} style={{width:"25%", textAlign:"center", marginLeft:"35%",marginTop:"7%", height:"70vh" }}>
//          <Box sx={{
//           width: 70,
//           height: 70,
//           borderRadius: 9,
//           bgcolor: 'primary.main',
//           '&:hover': {
//             bgcolor: 'primary.dark',
//           },
//         }}
//       />

//         <div style={{display:"flex", flexDirection:"column", gap:"10px",marginLeft:"15%", padding:"30px",width:"50%"}}>
//           <TextField  required label="Username" variant="standard" helperText="Username is required" />
//           <TextField  required type="password" label="Password" variant="standard" helperText="Username is required" />
//           <Button variant='contained'>Sign Up</Button>
//       </div>
//       </Paper>
//     </div>
//   )
// }

// export default App;



//import Parent from "./Parent";
// function App() {
//   const student = {
//     name: "Arun",
//     department: "MERN Stack"
//   };
  

//   return <Parent student={student} />;
// }

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Dashboard from "./Dashboard";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Dashboard products={products} />
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import StudentList from './StudentList';

function App() {
  const [datas,setDatas] = useState([]);

   useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setDatas(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
      }, []);
      
  return(
    <div>
        <StudentList datas={datas} />
    </div>
  )
}

export default App;
