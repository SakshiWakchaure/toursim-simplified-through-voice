

import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigation } from '@react-navigation/native';
import '../screens/index.css'
// import '../screens/App.css'
import '../screens/New_sign'
import { useLayoutEffect } from 'react'
import '../screens/New.css'
import  axios  from 'axios'
import { values } from 'regenerator-runtime'
//import '../backend/server'
//import { useNavigation } from 'react-router-dom'

const New = () => {
  const navigate = useNavigation();
  useLayoutEffect(() => {

    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: ""
})



const [data,setData] = useState([]);
console.log(inpval);

const getdata = (e) => {
    //console.log(e.target.value);


    const { value, name } = e.target;
    //console.log(value,name);


    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })

}

const addData = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/users', inpval)
    .then(res=>console.log("Registered Successfully"))
    .catch(err=>console.log(err))

    const { name, email, date, password } = inpval;

    if (name === "") {
        toast.error(' name field is requred!',{
            position: "bottom-left",
        });
    } else if (email === "") {
         toast.error('email field is requred',{
            position:  "bottom-left",
        });
    } else if (!email.includes("@")) {
         toast.error('plz enter valid email addres',{
            position: "bottom-left",
        });
    // } else if (date === "") {
    //      toast.error('date field is requred',{
    //         position: "top-center",
    //     });
    } else if (password === "") {
         toast.error('password field is requred',{
            position: "bottom-left",
        });
    } else if (password.length < 5) {
         toast.error('password length greater five',{
            position: "bottom-left",
        });
    } else {
        toast.success('Data Added Succesfully!!')
        console.log("data added succesfully");

        //axios.post('http://localhost:8081', values);
        // axios.post('http://localhost:19006/New', inpval)
       // .then(res=> console.log(res))
       // .catch(err=> console.log(err));


        // navigate("/New_sign");
        navigate.navigate('New_sign');
        localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

    }

}
  return (
    <>
    <div className='login_bg'>
            <div className="container_login">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form onSubmit={addData}>
                            <Form.Group className="form" controlId="formBasicName">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">

                                <Form.Control onChange={getdata} name='bdate' type="date" />
                            </Form.Group> */}

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className=' button' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='acc'>Already Have an Account <span><a onClick={()=>navigate.navigate('New_sign')} href="#New_sign">SignIn</a></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
    </div>
        </>
 
  )
}

export default New

