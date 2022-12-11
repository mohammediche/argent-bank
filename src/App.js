import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Undefined from "./pages/Undefined.js";
import PrivateRoutes from "./helpers/PrivateRoutes";

function App() {
  /* une fois Redux intégrer, faire la condition avec redux et non avec localStorage
  car probleme pour la route /profile, la condition ne s'applique pas bien à condition de rafraichir la page */

  // ce code permet d'intercepeter toutes mes request et mettera Authorization Bearer Token
  // au lieu d'appeler headers a chaque request à faire.
  /** faire avec Redux et le faire sur le dossier Service **/
  // const token = useSelector((state) => state.name.token);
  // axios.interceptors.request.use(
  //   (config) => {
  //     config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={localStorage.getItem("token") ? <Navigate to={"/profile"} /> : <Login />} />
          <Route
            path="/register"
            element={localStorage.getItem("token") ? <Navigate to={"/profile"} /> : <Register />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<Undefined />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
