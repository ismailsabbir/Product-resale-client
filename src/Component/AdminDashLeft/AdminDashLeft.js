import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import "./AdminDashLeft.css";
const AdminDashLeft = () => {
  return (
    <div className="admin-dash-left-con">
      <Link to="/dashboard/admin/alluser" className="all-user">
        {" "}
        <FaUserTie></FaUserTie> <p>User</p>
      </Link>
      <Link to="/dashboard/admin/category" className="all-user">
        {" "}
        <BiCategory></BiCategory> <p>Product Category</p>
      </Link>
      <Link to="/dashboard/admin/allproduct" className="all-user">
        {" "}
        <RiProjectorFill></RiProjectorFill> <p>All Product</p>
      </Link>
      <Link to="/dashboard/admin/allorders" className="all-user">
        {" "}
        <FaShoppingCart></FaShoppingCart> <p>Orders</p>
      </Link>
    </div>
  );
};

export default AdminDashLeft;
