import React from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
const RequiredAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  if (isAuth) return children;
  return <Navigate to="/login" state={{ from: location }} repalce />;
};

export default RequiredAuth;
