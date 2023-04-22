import React from 'react'
import '../screens/Contact.css'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
//import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('');
  //const ALAN_Key = '791faaaeb3577dd095292ed5ff8657242e956eca572e1d8b807a3e2338fdd0dc/stage'
  // useEffect(() => {
  //   alanBtn({
  //       key:  '791faaaeb3577dd095292ed5ff8657242e956eca572e1d8b807a3e2338fdd0dc/stage',
  //       onCommand: (commandData) => {
  //         if(commandData.command === 'name'){
  //           setName(commandData.data)
  //         }
  //         if(commandData.command === 'phone'){
  //           setPhone(commandData.data)
  //         }
  //         if(commandData.command === 'subject'){
  //           setSubject(commandData.data)
  //         }
  //         if(commandData.command === 'message'){
  //           setMessage(commandData.data)
  //         }
  //       }
  //   });
  // });
  return (
    <div className='form-feild'>
    <div className='background-img'>
    <div className='from-container'>
      <h1>Send a message to Us !</h1>
      <form>
        <input  placeholder='Name'
                name='name'
                onChange={(event) => setName(event.target.value)}
                value={name}
                type='text' />
                <input
                placeholder='Phone'
                name='phone'
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                type='text'
              />
                <input  placeholder='Subject'
                name='subject'
                onChange={(event) => setSubject(event.target.value)}
                value={subject}
                type='text' />
                <textarea  placeholder='Enter your message'
                name='message'
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                type='text' />
        <button> Send Message</button>
        
      </form>
      
    </div>
    </div>
    </div>
  )
}

export default Contact
