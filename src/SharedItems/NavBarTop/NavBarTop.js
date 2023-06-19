import React, { useState } from "react";
import "./NavBarTop.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/emart-011.webp";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
const NavBarTop = () => {
  const [click, setclick] = useState(false);
  const [color, setcolor] = useState(false);
  const { user, userlogout } = useContext(AuthContext);
  // console.log(user?.email);
  const handleclick = () => {
    setclick(true);
  };
  const handelremove = () => {
    setclick(false);
  };
  const handlesearch = (event) => {
    event.preventDefault();
    const searchvalue = event.target.searchvalue.value;
    console.log(searchvalue);
  };
  const changecolor = () => {
    if (window.scrollY >= 80) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);
  const logouthandler = () => {
    userlogout()
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="navbar-container">
      <Navbar
        expand="lg"
        fixed="top"
        className={color ? "new-color" : "oldcolor"}
      >
        <Container>
          <Navbar.Brand href="#">
            <Link to="/">
              <img className="logo" src={logo} alt="not found" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto nav-items">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "new-item-color" : undefined
                }
                id="nav-item"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "new-item-color" : undefined
                }
                id="nav-item"
                to="/services"
              >
                ALL Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "new-item-color" : undefined
                }
                id="nav-items"
                to="/specificservice"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "new-item-color" : undefined
                }
                id="nav-item"
                to="/dashboard"
              >
                Dashboards
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "new-item-color" : undefined
                }
                id="nav-item"
                to="/signup"
              >
                SignUp
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "new-item-color" : undefined
                }
                id="nav-item"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink id="nav-item" onClick={logouthandler}>
                LogOut
              </NavLink>
            </Nav>
            <Nav>
              <div className="nav-last">
                {click && (
                  <div className="search-container">
                    <Form onSubmit={handlesearch} className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        name="searchvalue"
                      />
                      <Button type="submit" variant="outline-success">
                        Search
                      </Button>
                    </Form>
                    <AiOutlineClose
                      className="iconall"
                      onClick={handelremove}
                    ></AiOutlineClose>
                  </div>
                )}
                <FiSearch
                  id="searchicon"
                  className={click && "searchicon"}
                  onClick={handleclick}
                ></FiSearch>
                <div>
                  {/* <AiOutlineShopping className="iconall"></AiOutlineShopping> */}
                  <div className="drawer drawer-end">
                    <input
                      id="my-drawer-4"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content">
                      {/* Page content here */}
                      <label htmlFor="my-drawer-4" className="drawer-button ">
                        <AiOutlineShopping className="iconall"></AiOutlineShopping>
                      </label>
                    </div>
                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer-4"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                          <Link>Sidebar Item 1</Link>
                        </li>
                        <li>
                          <Link>Sidebar Item 2</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <FaUserAlt className="iconall"></FaUserAlt>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "new-item-color" : undefined
                  }
                  id="nav-item"
                  to="/postadd"
                >
                  POST YOUR AD
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarTop;
