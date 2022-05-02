import './App.css';
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import Undefined from "./pages/Undefined.js";

function App() {

  
  
  return (
    <BrowserRouter>
    <Routes>
      <>
       <Route path='/' element={ <Home/> } />
       <Route path='/login' element={ <Login/>   } />
       <Route path='/register' element={ localStorage.getItem("token") ? <Navigate to={"/profile"} /> : <Register/> } />
      <Route  path='/profile'  element={  <Profil/> } /> 
      <Route path='*' element={ <Undefined/> } />
      </>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
