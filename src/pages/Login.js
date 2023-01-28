import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AccountService from "../services/AccountService";
import { getToken, getUserData } from "../feature/user.action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = AccountService();

  const [email, setEmail] = useState("steve@rogers.com");
  const [password, setPassword] = useState("password456");
  const isConnected = useSelector((state) => state.status);

  useEffect(() => {
    if (isConnected) {
      navigate("/profile");
    }
  }, [isConnected, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await account.submitLogin(email, password);
    dispatch(getToken(token));
    const data = await account.getUserInfo(token);
    console.log(data);
    dispatch(getUserData(data));
  };

  return (
    <div>
      <Nav />
      <main className="main bg-dark height">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
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
