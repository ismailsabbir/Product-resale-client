import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./SpecificProductPages.css";
import MainService from "../../Component/MainService/MainService";
import { Dropdown, Form } from "react-bootstrap";
const SpecificProductPages = () => {
  const [services, setservices] = useState([]);
  const [categorys, setcategory] = useState([]);
  const [category, setcategories] = useState([]);
  const [color, setcolor] = useState();
  const servicess = useLoaderData();
  const handlecolorsubmit = (event) => {
    const color = event.target.value;
    setcolor(color);
    fetch(
      `${process.env.REACT_APP_HOST_LINK}/spcolorproduct?&color=${color}&id=${categorys}`
    )
      .then((res) => res.json())
      .then((data) => setservices(data));
  };
  useEffect(() => {
    setservices(servicess);
  }, [servicess]);
  useEffect(() => {
    services.map((serv) => {
      const categoryid = serv.category_id;
      setcategory(categoryid);
    });
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/category`)
      .then((req) => req.json())
      .then((data) => setcategories(data));
  }, []);
  const categoryproductlood = (category) => {
    fetch(
      `${process.env.REACT_APP_HOST_LINK}/spcategoryproduct/${category}?id=${categorys}`
    )
      .then((res) => res.json())
      .then((data) => setservices(data));
  };
  // useEffect(() => {
  //   fetch(
  //     `${process.env.REACT_APP_HOST_LINK}/sppriceproduct/:${categorys}?minprice=${minprice}&maxprice=${maxprice}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setservices(data));
  // }, [minprice, maxprice, categorys]);

  const lowtohigh = () => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/spasending?id=${categorys}`)
      .then((req) => req.json())
      .then((data) => setservices(data));
  };
  const hightolow = () => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/spdsending/?id=${categorys}`)
      .then((req) => req.json())
      .then((data) => setservices(data));
  };

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
          {category.map((category) => (
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
          {/* <div className="price-range-con">
            <h5>Price Range</h5>
            <MultiRangeSlider
              min={60}
              max={560}
              onChange={({ min, max }) => {
                setminprice(min);
                setmaxprice(max);
              }}
            />
          </div> */}
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
            <p className="specific-p">Specific Products :({services.length})</p>
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

export default SpecificProductPages;
