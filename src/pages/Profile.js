import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AccountService from "../services/AccountService";
import { useSelector } from "react-redux";

const Profile = () => {
  const [showFormEditName, setShowFormEditName] = useState(false);

  const account = AccountService();

  const userData = useSelector((state) => {
    console.log("state user profile :", state);
    // return state.name.user;
  }); // useSelector permet de faire appel au donnée du store
  console.log("profile page, user data : ", userData);

  // useEffect(() => {
  //   account.getUserInfo();
  // }, []);

  // open / close edit profileForm (firstName + lastName)
  const handleShowFormEditProfile = () => {
    setShowFormEditName(!showFormEditName);
  };

  const cancelEdit = () => {
    setShowFormEditName(!showFormEditName);
    // window.location.reload(false);
  };

  // crée une fonction handleeditProfil qui va etre appeler dans le submit,  qui vas appeler le service (F editProfile), si return 200,
  // tu appelle handleShowFormEditProfile(), sinon catch error

  return (
    <div>
      <Nav firstName={userData?.firstName} />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData?.firstName} {userData?.lastName}!
          </h1>
          <button className="edit-button" onClick={handleShowFormEditProfile}>
            Edit Name
          </button>
        </div>

        {showFormEditName && (
          <form className="editName" onSubmit={account.editProfile}>
            <div>
              <input
                className="editFirstName editInput"
                onChange={(e) => {
                  // dispatch(editUserData(e.target.value));
                }}
                value={userData?.firstName}
                type="text"
                placeholder={userData?.firstName}
                required
              />
              <input
                className="editLastName editInput"
                onChange={(e) => {
                  // dispatch(editUserData(e.target.value));
                }}
                value={userData?.lastName}
                type="text"
                placeholder={userData?.lastName}
                required
              />
            </div>

            <div className="save-cancel-buttons">
              <button className="saveEdit buttonsSaveCancel">Save</button>
              <button className="cancelEdit buttonsSaveCancel" onClick={cancelEdit}>
                Cancel
              </button>
            </div>
          </form>
        )}

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
      <Footer />
    </div>
  );
};

export default Profile;
