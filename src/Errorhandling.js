import React, { useState } from 'react'
import './Errorhandling.css';
import mec from './asset/mec.png'

function Errorhandling({data}) {
    
    
    const [value,setValue] = useState({
        name: "",
        fatherName: "",
        email: "",
        age: "",
        mobile : "",
        fatherMobile: "",
        town: "",
        address: "",
        district: "",
        state: ""
    })

    const [error,setError] = useState({
        nameError: "",
        fatherNameError: "",
        emailError: "",
        ageError: "",
        mobileError : "",
        fatherMobileError: "",
        townError: "",
        addressError: "",
        districtError: "",
        stateError: ""
    })
    
    function change(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
        if(error.nameError != ""){
            setError({...error,nameError:""})
        }
    }

    function handlesubmit(e) {
        e.preventDefault();

        setError ({
            ...error,
            nameError: value.name == "" ? "A field is required" : "",
            fatherNameError: value.fatherName == "" ? "A field is required" : "",
            ageError: value.age == "" ? "A field is required" : "",
            emailError: value.email == "" ? "A field is required" : "",
            mobileError: value.mobile == "" ? "A field is required" : "",
            fatherMobileError: value.fatherMobile == "" ? "A field is required" : "",
            townError: value.town == "" ? "A field is required" : "",
            addressError: value.address == "" ? "A field is required" : "",
            districtError: value.district == "" ? "A field is required" : "",
            stateError: value.state == "" ? "A field is required" : "",
        })
        console.log(error)

    }
  return (

    <div className='background'>
        
        <div className='display'>
            <h1 className='learn'>Learn & Discover</h1>

            <form onSubmit={handlesubmit} className='details'>
             <h1 className='topic'>Online Admission Enquiry - 2026</h1>  

            <label>Name</label><br /><input type="text" placeholder='Name' name='name' onChange={change}/><br />
            <span style={{color: "red"}}>{error.nameError}</span><br />

            <label> FatherName</label><br /><input type="text" placeholder='Father Name' name=' fatherName' onChange={change}/><br />
            <span style={{color: "red"}}>{error.fatherNameError}</span><br />

            <label>Email ID</label><br /><input type="email" placeholder='Email' name='email' /><br />
            <span style={{color: "red"}}>{error.emailError}</span><br />

            <label>Age</label><br /><input type="number" placeholder='Age' name='age' /><br />
            <span style={{color: "red"}}>{error.ageError}</span><br />

            <label>Mobile Number</label><br /><input type="number" placeholder='Mobile Number' name='mobile ' /><br />
            <span style={{color: "red"}}>{error.mobileError}</span><br />

            <label> Parent Mobile Number</label><br /><input type="number" placeholder='Parent Mobile Number' name='fatherMobile ' /><br />
            <span style={{color: "red"}}>{error.fatherMobileError}</span><br />

            <label>City/Town</label><br /><input type="text" placeholder='City/Town' name='town' onChange={change}/><br />
            <span style={{color: "red"}}>{error.townError}</span><br />

            <label>Address</label><br /><input type="text" placeholder='Address' name='address' onChange={change}/><br />
            <span style={{color: "red"}}>{error.addressError}</span><br />

            <label>District</label><br /><input type="text" placeholder='District' name='district' onChange={change}/><br />
            <span style={{color: "red"}}>{error.districtError}</span><br />

            <label>State</label><br /><input type="text" placeholder='State' name='state' onChange={change}/><br />
            <span style={{color: "red"}}>{error.stateError}</span><br />
    
            <button className='dot' type='submit'>Submit</button>
        </form>
        </div>
        
    </div>
  )
}

export default Errorhandling