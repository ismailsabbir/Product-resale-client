import React from "react";
import { Link } from "react-router-dom";
import "./DashboardLeft.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import useAdmin from "../../hook/useAdmin";
import useSeller from "../../hook/useSeller";
import useBuyer from "../../hook/useBuyer/useBuyer";
const DashboardLeft = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isseller] = useSeller(user?.email);
  const [isbuyer] = useBuyer(user?.email);
  console.log(isbuyer);
  return (
    <div>
      <div className="dashbord-link-con">
        {isseller && (
          <Link className="dashbord-link" to="/dashboard/sealler">
            Sellers Dashboard
          </Link>
        )}
        {isbuyer && (
          <Link className="dashbord-link" to="/dashboard/buyers">
            Buyers Dashboard
          </Link>
        )}

        {isAdmin && (
          <Link className="dashbord-link" to="/dashboard/admin">
            Admin Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashboardLeft;
