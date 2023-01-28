import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import { editProfileSlice } from "../feature/user.action";

const Profile = () => {
  const [showFormEditName, setShowFormEditName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const userData = useSelector((state) => state.user.user); // useSelector permet de faire appel au donnée du store
  console.log("user data => ", userData);

  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
    }
  }, [userData]);

  // open / close edit profileForm (firstName + lastName)
  const handleShowFormEditProfile = () => {
    setShowFormEditName(!showFormEditName);
  };

  const cancelEdit = () => {
    setShowFormEditName(!showFormEditName);
    // window.location.reload(false);
  };

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
          <form className="editName">
            {" "}
            {/*onSubmit={editProfile}, */}
            <div>
              <input
                className="editFirstName editInput"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
                type="text"
                placeholder={firstName}
                required
              />
              <input
                className="editLastName editInput"
                onChange={(e) => {
                  setLastName(e.target.value);
                  // dispatch(editUserData(e.target.value));
                }}
                value={lastName}
                type="text"
                placeholder={lastName}
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
