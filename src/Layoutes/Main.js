import React from "react";
import NavBarTop from "../SharedItems/NavBarTop/NavBarTop";
import { Outlet } from "react-router-dom";
import Footer from "../SharedItems/Footer/Footer";
import SmallFooter from "../SharedItems/SmallFooter/SmallFooter";

const Main = () => {
  return (
    <div>
      <NavBarTop></NavBarTop>
      <Outlet></Outlet>
      <Footer></Footer>
      <SmallFooter></SmallFooter>
    </div>
  );
};

export default Main;
