import React from "react";
import NavBarTop from "../SharedItems/NavBarTop/NavBarTop";
import { Outlet } from "react-router-dom";

const DashbordLayout = () => {
  return (
    <div>
      {/* <NavBarTop></NavBarTop> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DashbordLayout;
