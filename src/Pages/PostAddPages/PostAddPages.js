import React, { useEffect, useState } from "react";
import "./PostAddPages.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { BsFillImageFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
const PostAddPages = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const sellersName = user?.displayName;
  const selleremail = user?.email;
  const [productcategory, setproductcategory] = useState([]);
  const [selectedcategory, setselectedcategory] = useState([]);
  const [sphoto1, setphoto1] = useState();
  const [sphoto2, setphoto2] = useState();
  const [sphoto3, setphoto3] = useState();
  const [sphoto4, setphoto4] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/allcategory`)
      .then((req) => req.json())
      .then((data) => setproductcategory(data));
  }, []);
  const handleselectedcategory = (props) => {
    setselectedcategory(props.id);
    toast(`selected!!!`, {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const handleimage1 = (e) => {
    const image1 = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", image1);
    const url = `https://api.imgbb.com/1/upload?key=${imagebb}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setphoto1(data.data.url);
        }
      });
  };
  const handleimage22 = (e) => {
    const image1 = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", image1);
    const url = `https://api.imgbb.com/1/upload?key=${imagebb}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setphoto2(data.data.url);
        }
      });
  };
  const handleimage3 = (e) => {
    const image1 = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", image1);
    const url = `https://api.imgbb.com/1/upload?key=${imagebb}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setphoto3(data.data.url);
        }
      });
  };
  const handleimage4 = (e) => {
    const image1 = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", image1);
    const url = `https://api.imgbb.com/1/upload?key=${imagebb}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setphoto4(data.data.url);
        }
      });
  };

  const imagebb = process.env.REACT_APP_IMGBB;
  const handlesubmitadd = (event) => {
    event.preventDefault();
    const category_id = selectedcategory;
    const service = event.target.product_name.value;
    const Buying_Price = event.target.buyingprice.value;
    const balance = event.target.sellingprice.value;
    const Categories = event.target.productcategory.value;
    const color = event.target.color.value;
    const about = event.target.description.value;
    const Type = event.target.product_typea.value;
    const Meterial = event.target.product_metriala.value;
    const Shape = event.target.product_shapea.value;
    const Color = event.target.color.value;
    const PurchaseDate = event.target.purchase.value;
    const PostDate = event.target.post_date.value;
    const Division = event.target.division.value;
    const City = event.target.city.value;
    const aditional = [Type, Meterial, Shape, Color];
    const picture = sphoto1;
    const picture1 = sphoto2;
    const picture2 = sphoto3;
    const picture3 = sphoto4;
    const sellername = event.target.sellername.value;
    const selleremail = event.target.selleremail.value;
    const mobileNumber = event.target.sellernumber.value;
    const address = event.target.selleraddress.value;
    const data = {
      category_id,
      service,
      balance,
      Categories,
      color,
      about,
      aditional,
      Buying_Price,
      PurchaseDate,
      PostDate,
      Division,
      City,
      picture,
      picture1,
      picture2,
      picture3,
      sellername,
      selleremail,
      mobileNumber,
      address,
    };
    console.log(data);
    fetch(`${process.env.REACT_APP_HOST_LINK}/productadd`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Post Add", { position: "top-center", autoClose: 1000 });
      });
  };
  return (
    <div className="postadd-container">
      <h4 className="add-product-head">Add product for Seal!!</h4>
      <h6 className="select-category-head">Select Category:</h6>
      <div className="homeactegoryitem row">
        {productcategory.map((catego, i) => (
          <Link
            required
            onClick={() => handleselectedcategory(catego)}
            key={i}
            className="homecategory-product col col-6 col-sm-3 col-md-3 col-lg-4"
            id="add-category"
          >
            <img src={catego.image} alt="not found" />
            <div className="homecategory-text">
              <h6>{catego.name}</h6>
              <p>96400 add</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="all-input-con">
        <Form onSubmit={handlesubmitadd} className="row">
          <Form.Group className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input">
            <Form.Label className="input-level">Select SubCategory</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="productcategory"
              required
            >
              <option value="Furniture">Furniture</option>
              <option value="Decoration">Decoration</option>
              <option value="Lamp">Lamp</option>
              <option value="Vase">Vase</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Product Title</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Product Title"
              name="product_name"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <label className="input-level" for="purchase-date">
              Purchase date:
            </label>
            <br />
            <input
              type="date"
              id="purchase-date"
              name="purchase"
              className="purchase-date-input"
            ></input>
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <label className="input-level" for="purchase-date">
              Post date:
            </label>
            <br />
            <input
              type="date"
              id="purchase-date"
              name="post_date"
              className="purchase-date-input"
              required
            ></input>
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Buying Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Buying price"
              name="buyingprice"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Selling Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Selling price"
              name="sellingprice"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input">
            <Form.Label className="input-level">Select Devision</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="division"
              required
            >
              <option value="Dhaka">Dhaka Division</option>
              <option value="Chattogram">Chattogram Division</option>
              <option value="Sylhet">Sylhet Division</option>
              <option value="Khulna">Khulna Division</option>
              <option value="Rajshahi">Rajshahi Division</option>
              <option value="Sylhet">Rangpur Division</option>
              <option value="Barishal">Barishal Division</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input">
            <Form.Label className="input-level">Select City</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="city"
              required
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Rangpur</option>
              <option value="Barishal">Barishal</option>
            </Form.Select>
          </Form.Group>

          <div className="image-input-con col col-12 col-sm-12 col-md-4 col-lg-5 first-input">
            <div>
              <Form.Group className="mb-3">
                <label for="input-file1" id="file">
                  <BsFillImageFill className="image-icon"></BsFillImageFill>
                  <p className="add-poto-t">Add Photo</p>
                  <input
                    type="file"
                    id="input-file1"
                    className="fileinput"
                    name="image"
                    onChange={handleimage1}
                  />
                </label>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <label for="input-file2" id="file">
                  <BsFillImageFill className="image-icon"></BsFillImageFill>
                  <p className="add-poto-t">Add Photo</p>
                  <input
                    type="file"
                    id="input-file2"
                    className="fileinput"
                    name="imagef"
                    onChange={handleimage22}
                  />
                </label>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <label for="input-file3" id="file">
                  <BsFillImageFill className="image-icon"></BsFillImageFill>
                  <p className="add-poto-t">Add Photo</p>
                </label>
                <input
                  type="file"
                  id="input-file3"
                  className="fileinput"
                  name="images"
                  onChange={handleimage3}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <label for="input-file4" id="file">
                  <BsFillImageFill className="image-icon"></BsFillImageFill>
                  <p className="add-poto-t">Add Photo</p>
                </label>
                <input
                  type="file"
                  id="input-file4"
                  className="fileinput"
                  name="imaget"
                  onChange={handleimage4}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="input-level">Product Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="About Product"
              rows={3}
              name="description"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Product Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fruniture"
              name="product_typea"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Product Meterial</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Meterial"
              name="product_metriala"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Product Shape</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Shape"
              name="product_shapea"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Product Color</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="color"
              required
            >
              <option value="Copper Red">Copper Red</option>
              <option value="Dark Brown">Dark Brown</option>
              <option value="Rosy Brown">Rosy Brown</option>
              <option value="Dark Green">Dark Green</option>
              <option value="Dark Yellow">Dark Yellow</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Sellers Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sellers Name"
              name="sellername"
              required
              value={sellersName}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">Sellers Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Sellers email"
              name="selleremail"
              required
              value={selleremail}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">
              Sellers Mobile Number
            </Form.Label>
            <Form.Control
              type="mobile"
              placeholder="Mobile Number"
              name="sellernumber"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col col-12 col-sm-12 col-md-4 col-lg-5 first-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="input-level">
              Sellers Current address
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Current Address"
              name="selleraddress"
              required
            />
          </Form.Group>

          <div className="post-add-con">
            <button type="submit" className="postadd-btn">
              Post Your Add
            </button>
          </div>
        </Form>
      </div>

      {/* <div className="subcategory-con"></div> */}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default PostAddPages;
