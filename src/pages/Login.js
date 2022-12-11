import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AccountService from "../services/AccountService";

const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const account = AccountService(email, password);

  return (
    <div>
      <Nav />
      <main className="main bg-dark height">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={account.submitLogin}>
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
            <button className="sign-in-button"> Sign In </button>
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

export default Login;
