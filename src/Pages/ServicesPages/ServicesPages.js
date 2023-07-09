import React, { useEffect, useState } from "react";
import "./ServicesPages.css";
import MainService from "../../Component/MainService/MainService";
import { Link } from "react-router-dom";
import MultiRangeSlider from "../../Component/MultiRangeSlider/MultiRangeSlider";
import { Dropdown, Form } from "react-bootstrap";
const ServicesPages = () => {
  const [services, setservices] = useState([]);
  const [categorys, setcategories] = useState([]);
  const [minprice, setminprice] = useState(60);
  const [maxprice, setmaxprice] = useState(560);
  const [color, setcolor] = useState();
  const handlecolorsubmit = (event) => {
    const color = event.target.value;
    setcolor(color);
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/category`)
      .then((req) => req.json())
      .then((data) => setcategories(data));
  }, []);
  const categoryproductlood = (category) => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/categoryproduct/${category}`)
      .then((res) => res.json())
      .then((data) => setservices(data));
  };
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_HOST_LINK}/priceproduct?minprice=${minprice}&maxprice=${maxprice}`
    )
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, [minprice, maxprice]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/colorproduct?&color=${color}`)
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, [color]);
  const lowtohigh = () => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/asending`)
      .then((req) => req.json())
      .then((data) => setservices(data));
  };
  const hightolow = () => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/dsending`)
      .then((req) => req.json())
      .then((data) => setservices(data));
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/products`)
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  return (
    <div className="servicespages-container">
      <div className="servicespage-product row justify-Content-Center">
        <div className="servicespagesleft col col-12 col-sm-12 col-md-4 col-lg-2">
          <>
            <Link to="/home" className="pagerouter">
              Home
            </Link>
            /
            <Link to="/services" className="pagerouter">
              Shop
            </Link>
          </>
          <h5 className="product-category-title">Categories</h5>
          {categorys.map((category) => (
            <div className="categorydiv">
              <Link
                onClick={() => categoryproductlood(category.name)}
                className="category"
                id="category"
              >
                {category.name}
              </Link>
            </div>
          ))}
          <div className="price-range-con">
            <h5>Price Range</h5>
            <MultiRangeSlider
              min={60}
              max={560}
              onChange={({ min, max }) => {
                setminprice(min);
                setmaxprice(max);
              }}
            />
          </div>
          <div className="color-con">
            <h5>Colors</h5>
            <Form className="color-form">
              <input
                onClick={handlecolorsubmit}
                type="checkbox"
                value="Copper Red"
                name="color"
              />
              <label for="color">Copper Red</label>
              <br></br>
            </Form>
            <Form className="color-form">
              <input
                onClick={handlecolorsubmit}
                type="checkbox"
                value="Dark Brown"
                name="color"
              />
              <label for="color">Dark Brown</label>
              <br></br>
            </Form>
            <Form className="color-form">
              <input
                onClick={handlecolorsubmit}
                type="checkbox"
                value="Rosy Brown"
                name="color"
              />
              <label for="color">Rosy Brown</label>
              <br></br>
            </Form>
            <Form className="color-form">
              <input
                onClick={handlecolorsubmit}
                type="checkbox"
                value="Dark Green"
                name="color"
              />
              <label for="color">Dark Green</label>
              <br></br>
            </Form>
            <Form className="color-form">
              <input
                onClick={handlecolorsubmit}
                type="checkbox"
                value="Dark Yellow"
                name="color"
              />
              <label for="color">Dark Yellow</label>
              <br></br>
            </Form>
          </div>
          <div className="stock">
            <h6>Stock Status</h6>
            <Form className="stock-form">
              <input type="checkbox" value="Dark Yellow" name="color" />
              <label for="color">In stock ({services.length})</label>
              <br></br>
            </Form>
          </div>
        </div>

        <div className="servicespagesright col col-12 col-sm-12 col-md-4 col-lg-8">
          <div className="droupdrown">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Sorting by price
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={lowtohigh}>
                  Sort by Price:Low to High
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={hightolow}>
                  Sort by Price:High to Low
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="row justify-content-Center">
            {services.map((service) => (
              <MainService service={service} key={service._id}></MainService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPages;
