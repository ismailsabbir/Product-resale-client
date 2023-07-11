import React from "react";
import Spiner from "../../CommonItem/Spiner/Spiner";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import useAdmin from "../../hook/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminloding] = useAdmin(user?.email);
  let location = useLocation();
  if (loading || adminloding) {
    return <Spiner></Spiner>;
  }
  if (user && user.uid && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
