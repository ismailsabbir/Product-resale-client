import React from "react";
import "./BuyersDashborde.css";
import DashboardLeft from "../../Component/DashboardLeft/DashboardLeft";
const BuyersDashborde = () => {
  return (
    <div className="dashboards-container">
      <div className="row">
        <div className="dashboard-left col col-6 col-sm-3 col-md-3 col-lg-3">
          <DashboardLeft></DashboardLeft>
        </div>
        <div className="dashboard-right col col-6 col-sm-3 col-md-3 col-lg-8 ">
          <h5>Dashboard Buyers</h5>
        </div>
      </div>
    </div>
  );
};

export default BuyersDashborde;
