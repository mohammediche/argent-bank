import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // useDispatch permet de déclancher les actions du reducer
import { getToken, getUserData } from "../feature/user.action"; // useSelector permet de faire appel au donnée du store

const AccountService = (email, password, firstName, lastName) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const myToken = useSelector((state) => state.name.token);

  const submitRegister = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((res) => {
        navigate("/login");
      });
  };
  const submitLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.body.token);
        dispatch(getToken(res.data.body.token));
        let token = res.data.body.token;
        // crée une autre fonction pour le token et faire le dispatch ici qui contient le token
        getUserInfo(token);
        // window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        alert("erreur, username ou le mot de passe n'existe pas");
      });
  };
  const getUserInfo = (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(`${BASE_URL}/profile`, {}, config).then((res) => {
      dispatch(getUserData(res.data.body));
    });
  };
  const editProfile = (e) => {
    e.preventDefault();

    axios
      .put(`${BASE_URL}/profile`, {
        firstName,
        lastName,
      })
      .then((res) => {
        alert("modification réalisé avec succés !");
      })

      .catch((error) => console.log(error));
  };

  return { submitLogin, submitRegister, editProfile, getUserInfo };
};

export default AccountService;
