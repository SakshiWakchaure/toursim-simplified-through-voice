import React, {useLayoutEffect} from 'react'
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <head>
    <div>
      
    <meta charSet="UTF-8"/>
    <meta http-Equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {/* <!-- CSS only --> */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>
    

    {/* <!-- JavaScript Bundle with Popper --> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous"></script>

    {/* <!-- Leaflet Css --> */}
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.1/dist/leaflet.css"
   integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
   crossOrigin=""/>



    {/* <!-- External Stylesheet --> */}
    <link rel="stylesheet" href="style.css" type="text/css"/>
    
    <title>Bus Tracker</title>
  
    
      <div>
  <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container-fluid">
      <a className="navbar-brand" href="first.html">MyBus</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Bus Tickets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="help.html">Help</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Manage Booking
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <a href="signup.html"><img className="pe-4" src="./img/icons8-account-50.png"/></a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
<section className="vh-100" style={{backgroundColor:"#071635;"}}>
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col col-xl-10">
    <div className="card" style={{borderRadius: "1rem;", backgroundColor:"#2B2D42"}}>
    <div className="row g-0">
    <div className="col-md-6 col-lg-5 d-none d-md-block">
    <img
    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
    alt="login form"
    className="img-fluid" style={{borderradius: "1rem 0 0 1rem"}}
    />
    </div>
    <div className="col-md-6 col-lg-7 d-flex align-items-center">
    <div className="card-body p-4 p-lg-5 text-black">
    
    
    <div className="d-flex align-items-center mb-3 pb-1">
    <span className="h1 fw-bold mb-0" style={{color:"#FFC107;"}}>MyBus</span>
    </div>
    
    <h5 className="fw-normal text-white mb-3 pb-3" style={{letterSpacing: "1px;"}}>Log into your account</h5>
    <form action="#" method="post">
    <div className="form-group">
    
    <div className="form-outline mb-4">
    <input type="email" className="form-control" id="email" name="email" placeholder="Email" required/>
    
    </div>
    
    
    </div>
    
    <div className="form-group">
    <div className="form-outline mb-4">
    <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
    
    </div>
    </div>
    
    <div className="pt-1 mb-4">
    <button type="submit" className="btn btn-warning">Login</button>
    </div>
    </form>
    <a className="small text-muted" href="#!">Forgot password?</a>
    <p className="mb-5 text-white pb-lg-2" style={{color: "#393f81;"}}>Don't have an account? <a href="signup.html" style={{color: "#f7c634;"}}>Register here</a></p>
    <a href="#!" className="small text-muted">Terms of use.</a>
    <a href="#!" className="small text-muted">Privacy policy</a>
    
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <footer className="bg-dark text-center text-white"/>
        {/* <!-- Grid container --> */}
        <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1" style={{color: "#FFC107"}}>Welcome to MyBus</h5>
                        <p className="small text-muted">We here at MyBus, Provide Live location with ease steps and makes booking easy by booking tickets online. </p>
                        <p className="small mb-0" style={{color: "#FFC107"}}>&copy; Copyrights. All rights reserved.</p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text mb-3" style={{color: "#FFC107"}}>Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Get started</a></li>
                            <li><a href="#" className="text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text mb-3" style={{color: "#FFC107;"}}>Quick links</h5>
                        <ul className="list-unstyled text-muted">
              
                              <li> <a href="#" className="text-white">Track Bus</a></li>
                              <li> <a href="#" className="text-white">Book Ticket</a></li>
                              <li> <a href="#" className="text-white">Book Pass</a></li>
                              <li> <a href="#" className="text-white">Help</a></li>
                       
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text mb-3" style={{color: "#FFC107;"}}>Hope you like it</h5>
                        <p className="small text-muted">Subscribe and be the first to get the best deals and exciting offers on trending products.
      
                        </p>
                        <form>
                            <div className="input-group mb-3">
                              <ul className="list-unstyled mb-0">
                                <li><input className="form-control" type="text" placeholder="Username" aria-label="Username" aria-describedby="button-addon2"/></li><br/>
                                <li><input className="form-control" type="password" placeholder="Password" aria-label="Password" aria-describedby="button-addon2"/></li><br/>
                                <li><button type="button" className="btn btn-warning">Subscribe</button></li>
                                </ul>
                                
                              </div>
                        </form>
                    </div>
                </div>
            </div>
      
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
            Copyright @ MyBus. All Rights Reserved  |  Contact Us: +91 90000 00000
          
        
    </div>
    
    </div>  
    </div>
    </head>
    
  );
};

export default Login;
