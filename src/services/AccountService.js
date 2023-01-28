import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const AccountService = () => {
  const navigate = useNavigate();
  // const myToken = useSelector((state) => state.name.token);

  const submitRegister = async (firstName, lastName, email, password) => {
    return await axios
      .post(`${BASE_URL}/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  const submitLogin = async (emailLogin, passwordLogin) => {
    return await axios
      .post(`${BASE_URL}/login`, {
        email: emailLogin,
        password: passwordLogin,
      })
      .then((res) => {
        return res.data.body.token;
      })
      .catch((error) => {
        console.log(error);
        alert("erreur, username ou le mot de passe n'existe pas");
      });
  };
  const getUserInfo = async (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return await axios.post(`${BASE_URL}/profile`, {}, config).then((res) => {
      return res.data.body;
    });
  };
  const editProfile = async (firstName, lastName, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return await axios
      .put(
        `${BASE_URL}/profile`,
        {
          firstName,
          lastName,
        },
        config
      )
      .then((res) => {
        alert("modification réalisé avec succés !");
        return res.data.body;
      })

      .catch((error) => console.log(error));
  };

  return { submitRegister, submitLogin, getUserInfo, editProfile };
};

export default AccountService;

// export const submitLogin = (email, password) => {
//   axios
//     .post(`${BASE_URL}/login`, {
//       email: email,
//       password: password,
//     })
//     .then((res) => {
//       return res.data.body.token;
//     })
//     .catch((error) => {
//       console.log(error);
//       alert("erreur, username ou le mot de passe n'existe pas");
//     });
// };
