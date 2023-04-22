
import { View,Text } from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
//import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLayoutEffect,useEffect } from 'react'
import './App.css'
import './New_sign.css'
import alanBtn from '@alan-ai/alan-sdk-web';


import { useState } from 'react'
const New_sign = () => {

    const navigate = useNavigation();
        useLayoutEffect(() => {
            navigate.setOptions({
            //headerShown: false,
            });
        }, []);

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is required', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    toast.success('You LoginIn Successfully!!!')
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    //navigate("/details")
                }
            }
        }

    }
    const ALAN_Key = '8ccd1f91b8af8a64264eb1cfa0e9cbcd2e956eca572e1d8b807a3e2338fdd0dc/stage'
    useEffect(() => {
      alanBtn({
          key: ALAN_Key,
          onCommand: (commandData) => {
           
            if(commandData.command === 'phone'){
              setPhone(commandData.data)
            }
            if(commandData.command === 'password'){
              setPassword(commandData.data)
            }
            
            //if(commandData.command === 'address'){
            //  setAddress(commandData.data)
            //}
          }
      });
    });

  return (
    <>
    <div className='signin_bg'>
    <div className="container_signin">
        <section className='d-flex justify-content-between'>
            <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                <h3 className='text-center col-lg-6'>Sign IN</h3>
                <Form >

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                        <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                    </Form.Group>
                    <a onClick={()=>navigate.navigate('Home')} href='#Home'>
                    <Button variant="primary" className='button' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit" >
                        Submit
                    </Button>
                    </a>
                    
                </Form>
                <p className='acc'>Already Have an Account <span>SignIn</span> </p>
            </div>
            <SIgn_img />
        </section>
        <ToastContainer />
    </div>
    </div>
</>

  )
}

export default New_sign
