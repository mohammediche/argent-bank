import React from "react";
import { useSelector } from "react-redux";

const Nav = (props) => {
  const isConnected = useSelector((state) => state.status);

  const signOut = () => {
    localStorage.clear();
  };

  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </a>

        {isConnected ? (
          <div className="navRightSide">
            <a className="main-nav-item" href="/profile">
              <i className="fa fa-user-circle"></i>
              <p>{props.firstName}</p>
            </a>

            <a className="main-nav-item" href="/login" onClick={signOut}>
              <img src="/img/logout.svg" alt="" className="logout" />
              Sign out
            </a>
          </div>
        ) : (
          <div className="nav-signIn-register">
            <a className="main-nav-item" href="/login">
              {" "}
              Sign In{" "}
            </a>
            <a className="main-nav-item" href="/register">
              {" "}
              Register{" "}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
