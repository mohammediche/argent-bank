import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountService from "../services/AccountService";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { editProfileSlice } from "../feature/user.action";
// import { editProfileSlice } from "../feature/user.action";

const Profile = () => {
  const [showFormEditName, setShowFormEditName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const account = AccountService();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.data.user); // useSelector permet de faire appel au donnée du store
  // const test = useSelector((state) => state.data);
  const token = useSelector((state) => state.data.token.token);
  console.log("userData =>", userData);
  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
    }
  }, [userData]);

  // open / close edit profileForm (firstName + lastName)
  const handleShowFormEditProfile = () => {
    setShowFormEditName(!showFormEditName);
    // window.location.reload(false);
  };

  const editProfile = async (e) => {
    e.preventDefault();

    const editedData = await account.editProfile(firstName, lastName, token);
    console.log("editedData fonction =>", editedData);
    dispatch(editProfileSlice(editedData));
    handleShowFormEditProfile();
  };

  return (
    <div>
      <Nav firstName={userData?.firstName} />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={handleShowFormEditProfile}>
            Edit Name
          </button>
        </div>

        {showFormEditName && (
          <form className="editName" onSubmit={editProfile}>
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
              <button className="cancelEdit buttonsSaveCancel" onClick={handleShowFormEditProfile}>
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
