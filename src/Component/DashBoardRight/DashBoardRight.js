import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import { useEffect } from "react";
import { useState } from "react";
import { FaUserAstronaut, FaShoppingCart, FaThList } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import "./DashBoardRight.css";
const DashBoardRight = () => {
  const { user } = useContext(AuthContext);
  const [userinfo, setuserinfo] = useState([]);
  const [category, setcategory] = useState([]);
  const [product, setproduct] = useState([]);
  const [usernumber, setusernumber] = useState([]);
  const [order, setorder] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/singleuser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setuserinfo(data));
  }, [user?.email]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/products`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/allcategory`)
      .then((res) => res.json())
      .then((data) => setcategory(data));
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/alluser`)
      .then((res) => res.json())
      .then((data) => setusernumber(data));
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/allorderproduct`)
      .then((res) => res.json())
      .then((data) => setorder(data));
  }, []);
  return (
    <div className="dashbord-right-con">
      <h5 className="dashbord-right-top">Welcome Our Dashbord Pages</h5>
      <h5>Personal information</h5>
      {userinfo.map((userin) => (
        <div className="dash-user-con">
          <img className="dash-user" src={userin.photoURL} alt="not found" />
          <p>{user.displayName}</p> <br />
          <p>{userin.email}</p>
          <p>UserType: {userin.role}</p>
        </div>
      ))}
      <div className="all-type-info-con">
        <div className="number-user">
          <div>
            {" "}
            <h5>Customers</h5>
            <p>{usernumber.length}</p>
          </div>
          <FaUserAstronaut className="das-use"></FaUserAstronaut>
        </div>
        <div className="number-user">
          <div>
            {" "}
            <h5>Order</h5>
            <p>{order.length}</p>
          </div>
          <FaShoppingCart className="das-use1"></FaShoppingCart>
        </div>
        <div className="number-user">
          <div>
            {" "}
            <h5>Products</h5>
            <p>{product.length}</p>
          </div>
          <FaThList className="das-use2"></FaThList>
        </div>
        <div className="number-user">
          <div>
            {" "}
            <h5>category</h5>
            <p>{category.length}</p>
          </div>
          <BiCategory className="das-use3"></BiCategory>
        </div>
      </div>
    </div>
  );
};

export default DashBoardRight;
