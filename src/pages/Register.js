import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AccountService from "../services/AccountService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const account = AccountService();

  const handleRegister = async (e) => {
    e.preventDefault();
    const register = await account.submitRegister(firstName, lastName, email, password);
    console.log(register);
  };

  return (
    <div>
      <Nav />
      <main className="main bg-dark height">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Register</h1>

          <form onSubmit={handleRegister}>
            <div className="input-wrapper">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                id="firstName"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">lastName</label>
              <input
                type="text"
                id="lastName"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* PLACEHOLDER DUE TO STATIC SITE */}
            <button className="sign-in-button"> Register </button>
            {/*     SHOULD BE THE BUTTON BELOW 
             <button className="sign-in-button">Sign In</button> 
         */}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
