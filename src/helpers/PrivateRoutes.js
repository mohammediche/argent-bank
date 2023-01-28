import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isConnected = useSelector((state) => state.data.status);

  if (isConnected) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
  // return isConnected ? children : <Navigate to={"/login"}></Navigate>;
};
export default PrivateRoutes;
