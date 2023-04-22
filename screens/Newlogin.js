import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigation } from '@react-navigation/native';

function Newlogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const ALAN_Key = '09e97656c4c9444395292ed5ff8657242e956eca572e1d8b807a3e2338fdd0dc/stage'
  
    useEffect(() => {
      alanBtn({
          key: ALAN_Key,
          onCommand: (commandData) => {
            if(commandData.command === 'email'){
              setName(commandData.data)
            }
            if(commandData.command === 'password'){
              setPhone(commandData.data)
            }
           
          }
      });
    });
   
    return 
    
    <div className="container mt-3">
        <section className='d-flex justify-content-between'>
            <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                <h3 className='text-center col-lg-6'>Sign IN</h3>
                <Form >
  
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
  
                        <Form.Control 
                        type="email" 
                        name='email' 
                        onChange={(event) => setEmail(event.target.value)} 
                        placeholder="Enter email" 
                        text="charvar"
                        />
                        
                    </Form.Group>
  
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
  
                        <Form.Control 
                        type="password" 
                        name='password' 
                        onChange={(event) => setPassword(event.target.value)} 
                        placeholder="Password" 
                        text="charvar"
                        />
                    </Form.Group>
                    <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
            </div>
            <SIgn_img />
        </section>
        <ToastContainer />
    </div>
  
}
 
    


export default Newlogin