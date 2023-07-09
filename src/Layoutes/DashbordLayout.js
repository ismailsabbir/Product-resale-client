import React from "react";
import { Outlet } from "react-router-dom";
const DashbordLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default DashbordLayout;
