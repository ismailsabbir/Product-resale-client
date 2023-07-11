import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContest";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../CommonItem/Spiner/Spiner";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return <Spiner></Spiner>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoutes;
