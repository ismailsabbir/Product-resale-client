import React from "react";
import "./DashBoardPages.css";
import DashboardLeft from "../../Component/DashboardLeft/DashboardLeft";
import DashBoardRight from "../../Component/DashBoardRight/DashBoardRight";
const DashBoardPages = () => {
  return (
    <div className="dashboards-container">
      <div className="row dashbord-text-con">
        <div className="dashboard-left col col-12 col-sm-12 col-md-3 col-lg-3">
          <DashboardLeft></DashboardLeft>
        </div>
        <div className="dashboard-right col col-12 col-sm-12 col-md-8 col-lg-8 ">
          <DashBoardRight></DashBoardRight>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPages;
