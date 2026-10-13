import React, { useState } from 'react'
import './ModelBox.css';
import {logo} from './asset/logo.jpeg';

function ModelBox() {
  const [model,setModel] = useState(false)

  return (
    <>
      {/* <h1>ModelBox</h1>
      <button className='head'  onClick={() => setModel(true)}>Confirm</button>
      {model ? <div className='model'>
        <span>Are you sure, Do you want to continue?</span>
        <button className='head' onClick={() => setModel(false)}>OK</button>
      </div> : ""} */}

      <div className='poster'>
        <button className='xbutton'>x</button>
        <h1>Secure all your device</h1>
        <p>Ensure your mobile phone, laptop and other devices are protected online</p>
      </div>
      
    </>
  )
}

export default ModelBox