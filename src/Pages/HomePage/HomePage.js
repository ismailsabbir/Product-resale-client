import React, { useEffect, useState } from "react";
import "./HomePage.css";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";
import HomeDesign from "../../Component/HomeDesign/HomeDesign";
import HomeShopBanner from "../../Component/HomeShopBanner/HomeShopBanner";
import HomeProducts from "../../Component/HomeProducts/HomeProducts";
import Architecture from "../../Component/Architecture/Architecture";
import Suports from "../../Component/Suports/Suports";
import HomeCategory from "../../Component/HomeCategory/HomeCategory";
const HomePage = () => {
  const [services, setservices] = useState([]);
  const [allcategory, setallcategory] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/products`)
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/allcategory`)
      .then((res) => res.json())
      .then((data) => setallcategory(data));
  }, []);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeDesign services={services}></HomeDesign>
      <HomeShopBanner></HomeShopBanner>
      <HomeCategory category={allcategory}></HomeCategory>
      <HomeProducts services={services}></HomeProducts>
      <Architecture></Architecture>
      <Suports></Suports>
    </div>
  );
};

export default HomePage;
