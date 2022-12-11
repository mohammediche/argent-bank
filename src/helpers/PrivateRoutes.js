import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const authToken = localStorage.getItem("token");
  return authToken ? children : <Navigate to={"/login"}></Navigate>;
};
export default PrivateRoutes;
