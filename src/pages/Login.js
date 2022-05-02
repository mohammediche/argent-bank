import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Login = () => {
  

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 


  const login = (e) =>{
    e.preventDefault();
   

    axios.post("http://localhost:3001/api/v1/user/login", {

       email : email,
       password : password
    })
    .then((res)=>{
 
      localStorage.setItem("token", res.data.body.token);
      navigate("/profile");
    
    })
    .catch((error) => {
      console.log(error)
      alert("erreur, username ou le mot de passe n'existe pas");
    });
  }
 

    
    return (
        <div>
        <Nav/>
    <main className="main bg-dark height">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={login}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label> 
            <input type="email" id="email" onChange={ (e)=> {setEmail(e.target.value)} } value={email} required/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  onChange={ (e)=> {setPassword(e.target.value)} } value={password}  required/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE */}
          <button className='sign-in-button'> Sign In </button>
         {/*     SHOULD BE THE BUTTON BELOW 
             <button className="sign-in-button">Sign In</button> 
         */}
          
        </form>
      </section>
    </main>
      <Footer/>
        </div>
    );
};

export default Login;