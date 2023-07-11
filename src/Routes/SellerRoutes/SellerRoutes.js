import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import useSeller from "../../hook/useSeller";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../../CommonItem/Spiner/Spiner";

const SellerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isseller, sellerloding] = useSeller(user?.email);
  let location = useLocation();
  if (loading || sellerloding) {
    return <Spiner></Spiner>;
  }
  if (user && user.uid && isseller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoutes;
