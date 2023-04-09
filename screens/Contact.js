import React from 'react'
import '../screens/Contact.css'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
//import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigation();
        // useLayoutEffect(() => {
        //     navigate.setOptions({
            
        //     });
        // }, []);

  return (
    <div className='background-img'>
    <div className='from-container'>
      <h1>Send a message to Us !</h1>
      <form>
        <input placeholder='name'></input>
        <input placeholder='email'></input>
        <input placeholder='subject'></input>
        <textarea placeholder='enter your message'></textarea>
        <button> Send Message</button>
        
      </form>
      
    </div>
    </div>
  )
}

export default Contact
