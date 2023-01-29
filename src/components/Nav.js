import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../feature/user.action";

const Nav = (props) => {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.data.status);

  const handleSignOut = () => {
    dispatch(signOut());
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
            <p className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <p>{props.firstName}</p>
            </p>

            <p className="main-nav-item" onClick={handleSignOut}>
              <img src="/img/logout.svg" alt="" className="logout" />
              Sign out
            </p>
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
