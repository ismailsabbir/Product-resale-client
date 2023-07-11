import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import useBuyer from "../../hook/useBuyer/useBuyer";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../../CommonItem/Spiner/Spiner";

const BuyerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isbuyer, buyerloding] = useBuyer(user?.email);
  let location = useLocation();
  if (loading || buyerloding) {
    return <Spiner></Spiner>;
  }
  if (user && user.uid && isbuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoutes;
