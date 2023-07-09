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
import Swal from "sweetalert2";
import { useQuery } from "react-query";
const NavBarTop = () => {
  const [click, setclick] = useState(false);
  const [color, setcolor] = useState(false);
  const { user, userlogout } = useContext(AuthContext);
  const photo = user?.photoURL;
  var price = 0;
  const { data: cartproduct = [], refetch } = useQuery({
    queryKey: ["cartproduct"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_HOST_LINK}/cartproduct`);
      const data = res.json();
      return data;
    },
  });

  cartproduct.forEach((element) => {
    price = price + parseFloat(element.quentity) * parseFloat(element.balance);
  });
  const handleclick = () => {
    setclick(true);
  };
  const handelremove = () => {
    setclick(false);
  };
  const handlesearch = (event) => {
    event.preventDefault();
    // const searchvalue = event.target.searchvalue.value;
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
  const handlecartremove = (params) => {
    Swal.fire({
      title: "Do you want to Delete cart product?",
      showCancelButton: true,
      confirmButtonText: "Delate",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_HOST_LINK}/cartproduct/${params._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Delete Sucessfull");
              refetch();
            }
          });
      }
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

              {user?.email ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "new-item-color" : undefined
                    }
                    id="nav-item"
                    to="/dashboard"
                  >
                    Dashboards
                  </NavLink>
                  {/* <NavLink
                    className={({ isActive }) =>
                      isActive ? "new-item-color" : undefined
                    }
                    id="nav-item"
                    to="/dashboard/buyers"
                  >
                    My Orders
                  </NavLink> */}
                  <NavLink id="nav-item" onClick={logouthandler}>
                    LogOut
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "new-item-color" : undefined
                    }
                    id="nav-item"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </>
              )}
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
                    <div className="drawer-side mt-20">
                      <label
                        htmlFor="my-drawer-4"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu p-4 w-80  bg-base-200 text-base-content cart-sidebar ">
                        <div className="sidebar-hole-text">
                          <div className="cart-backet">
                            Your Backets({cartproduct.length})
                          </div>
                          <div className="cart-sidevar-con">
                            <p>
                              Buy <span>${price}</span> more for get{" "}
                              <span>Free Shipping!!</span>
                            </p>
                            <progress
                              className="progress progress-error w-56"
                              value="70"
                              max="100"
                            ></progress>
                          </div>
                          {cartproduct.map((product) => (
                            <div className="sidebar-cart-element">
                              <img
                                className="sidebar-product"
                                src={product.picture}
                                alt="not found"
                              />
                              <p>{product.service}</p>
                              <p>{product.quentity}</p>
                              <p id="totalprice">
                                {product.balance * product.quentity}
                              </p>
                              <button
                                onClick={() => handlecartremove(product)}
                                className="cart-product-delate-btn"
                              >
                                X
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="sidevar-price">
                          <p>Total Price</p>
                          <p>${price}</p>
                        </div>
                        <Link to="/cart" className="checkout-btn-c">
                          <button>View Cart</button>
                        </Link>
                        <Link to="/cartcheckout" className="checkout-btn-c">
                          <button>CHECKOUT</button>
                        </Link>

                        <div className="p">
                          <p>.</p>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>

                <details className="dropdown  mb-6">
                  <summary className="btn userinfo-btn">
                    {" "}
                    {user?.photoURL ? (
                      <div className="image-user-con">
                        <div className="avatar">
                          <div className="w-7 ml-2 rounded-full">
                            <img src={photo} alt="not found" />
                          </div>
                        </div>
                        <p className="user-name-nt">{user.displayName}</p>
                      </div>
                    ) : (
                      <div className="image-user-con">
                        <FaUserAlt className="iconall"></FaUserAlt>
                        <p className="user-name-nt">{user.displayName}</p>
                      </div>
                    )}
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-8">
                    <li>
                      <Link>Item 1</Link>
                    </li>
                    <li>
                      <Link>Item 2</Link>
                    </li>
                  </ul>
                </details>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "new-item-color" : undefined
                  }
                  id="add"
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
