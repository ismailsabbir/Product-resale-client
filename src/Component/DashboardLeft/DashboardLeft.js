import React from "react";
import { Link } from "react-router-dom";
import "./DashboardLeft.css";
const DashboardLeft = () => {
  return (
    <div>
      <div className="dashbord-link-con">
        <Link className="dashbord-link" to="/dashboard/sealler">
          Sellers Dashboard
        </Link>
        <Link className="dashbord-link" to="/dashboard/buyers">
          Buyers Dashboard
        </Link>
        <Link className="dashbord-link" to="/dashboard/admin">
          Admin Dashboard
        </Link>
      </div>
    </div>
  );
};

export default DashboardLeft;
