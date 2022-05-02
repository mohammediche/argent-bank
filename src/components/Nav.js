import React from 'react';

const Nav = () => {
  const userConnected = localStorage.getItem("token");

   const signOut = ()=>{
     localStorage.clear();
   }

    return (
        <div>
              <nav className="main-nav">

                 <a className="main-nav-logo" href="/">
                   <img
                     className="main-nav-logo-image"
                     src="./img/argentBankLogo.png"
                     alt="Argent Bank Logo"
                   />
                   <h1 className="sr-only">Argent Bank</h1>
                 </a>

                
                   {userConnected ? 
                   <a className="main-nav-item" href="/login" onClick={signOut}>
                    <i className="fa fa-arrow-right-from-bracket"></i>
                    <img src="/img/logout.svg" alt="" className='logout'/>     
                                   Sign out
                   </a> : 
                    <div className='nav-signIn-register'>
                         <a className="main-nav-item" href="/login"> Sign In </a>
                         <a className="main-nav-item" href="/register"> Register </a>
                   </div>}
               

              </nav>
        </div>
    );
};

export default Nav;