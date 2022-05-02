import React, { useEffect, useState } from 'react';
import axios from "axios"
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Profil = () => {

 
  // const [data, setData] = useState("");
  const [showFormEditName, setShowFormEditName] = useState(false);
  const token = localStorage.getItem("token");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  // ce code à mettre dans App.js pour intercepeter toutes mes request et mettera Authorization Bearer Token
  // au lieu d'appeler headers a chaque request à faire.
  //  axios.interceptors.request.use(
  //    config => {
  //      config.headers.Authorization = `Bearer ${token}`;
  //      return config;
  //    },
  //    error => {
  //      return Promise.reject(error);
  //    }
  //  )

   useEffect(()=>{
  

    axios.post("http://localhost:3001/api/v1/user/profile", {}, {

      headers: {
        Authorization : `Bearer ${token}`
      }
    })

    .then((res)=>{

      // setData(res.data.body);
      setFirstName(res.data.body.firstName);
      setLastName(res.data.body.lastName);

   
    })
    .catch(error => console.log(error));

  },[token])
  
  


 /******** Edit firstName and lastName user   *********/
 const editName = (e)=>{
   e.preventDefault();

   axios.put("http://localhost:3001/api/v1/user/profile", 
   {
     firstName,
     lastName
   }, 
   {
     headers : {
      Authorization : `Bearer ${token}`
     }
   })
   .then((res)=>{

     alert("modification réalisé avec succés !");
     setShowFormEditName(false);

   })

   .catch(error => console.log(error));
 }




    return (
        <div>
               <Nav/>

    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className="edit-button" onClick={()=> {setShowFormEditName(!showFormEditName)}}>Edit Name</button>
      </div>

      {showFormEditName && 
      <form className='editName' onSubmit={editName}>

        <div>
         <input className='editFirstName editInput' onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} type="text" placeholder={firstName} required/>
         <input className='editLastName editInput' onChange={(e)=>{setLastName(e.target.value)}} value={lastName}  type="text" placeholder={lastName} required/>
        </div>

        <div className='save-cancel-buttons'>
          <button className='saveEdit buttonsSaveCancel'>Save</button>
          <button className='cancelEdit buttonsSaveCancel' onClick={()=> {setShowFormEditName(false)}}>Cancel</button>
        </div>

      </form>}

      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
      < Footer />
        </div>
    );
};

export default Profil;