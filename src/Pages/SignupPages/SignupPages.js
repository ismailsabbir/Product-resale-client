import React from "react";
import "./SignupPages.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import UseTitle from "../../hook/UseTitle";
const SignupPages = () => {
  const {
    createuserwithemailpassword,
    googlecreateuser,
    updateusername,
    updatephoto,
  } = useContext(AuthContext);
  const [passworderror, setpassworderror] = useState("");
  const [sucessmessage, setsuccessmessage] = useState(false);
  const [userphotourl, setuserphotourl] = useState("");
  const [buttondis, setbuttondis] = useState(false);
  const imagebb = process.env.REACT_APP_IMGBB;
  console.log(userphotourl);
  const handlekeypress = () => {
    setbuttondis(false);
  };
  const handlesubmit = (event) => {
    setsuccessmessage(false);
    event.preventDefault();
    setbuttondis(true);
    event.currentTarget.disabled = true;
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmpassword = event.target.confirmpassword.value;
    const usertype = event.target.salerbuyer.value;
    const photo = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imagebb}`;
    console.log(url);
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setpassworderror("Please Set One Spacial Character");
      return;
    }
    if (password !== confirmpassword) {
      setpassworderror("Password Not Match");
      return;
    }
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setuserphotourl(data.data.url);
        }
        const photoURL = data.data.url;
        const userdata = { displayName, email, usertype, photoURL };

        createuserwithemailpassword(email, password)
          .then((req) => {
            const user = req.user;
            const currentuser = { email: user.email };
            setsuccessmessage(true);
            updatephoto(photoURL)
              .then((res) => res.json())
              .catch((error) => {
                console.error(error);
              });
            updateusername(displayName)
              .then((req) => {
                console.log(req.user);
              })
              .catch((error) => {
                console.error(error);
              });

            fetch(`${process.env.REACT_APP_HOST_LINK}/user`, {
              method: "POST",
              body: JSON.stringify(userdata),
              headers: {
                "Content-type": "application/json",
              },
            })
              .then((req) => req.json())
              .then((data) => {
                console.log(data);
              });
            fetch(`${process.env.REACT_APP_HOST_LINK}/jwt`, {
              method: "POST",
              body: JSON.stringify(currentuser),
              headers: {
                "Content-type": "application/json",
              },
            })
              .then((req) => req.json())
              .then((data) => {
                localStorage.setItem("reseall_product_token", data.token);
              });
          })
          .catch((error) => {
            setpassworderror("Email already used");
          });
      });
  };

  const handlegooglesignup = () => {
    googlecreateuser()
      .then((req) => {
        const user = req.user;
        const currentuser = { email: user.email };
        setsuccessmessage(true);
        fetch(`${process.env.REACT_APP_HOST_LINK}/user`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((req) => req.json())
          .then((data) => {
            console.log(data);
          });
        fetch(`${process.env.REACT_APP_HOST_LINK}/jwt`, {
          method: "POST",
          body: JSON.stringify(currentuser),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((req) => req.json())
          .then((data) => {
            localStorage.setItem("reseall_product_token", data.token);
          });
      })
      .catch((error) => {
        setpassworderror(error.message);
      });
  };
  UseTitle("signup-pages");
  return (
    <div className="signup-container">
      {passworderror && (
        <Alert key="danger" variant="danger">
          {passworderror}
        </Alert>
      )}
      {sucessmessage && (
        <Alert key="success" variant="success">
          Acount Created Sucessfully!!!!
        </Alert>
      )}

      <Form onSubmit={handlesubmit} className="form">
        <h5 className="mb-6 text-center signuplease">SignUp Please !!!</h5>
        <div className="name-image">
          <Form.Group className="mb-3 name-signup" controlId="formBasicname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onKeyDown={handlekeypress}
              name="name"
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3 profile" controlId="formBasicprofile">
            <Form.Label>Chose Profile</Form.Label>
            <Form.Control name="image" type="file" required />
          </Form.Group>
        </div>
        <div className="email-saler-buyer">
          <Form.Group className="mb-3 name-signup" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onKeyDown={handlekeypress}
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3 name-signup " controlId="formBasicEmail">
            <Form.Label>Chose saler / Buyer</Form.Label> <br />
            <select id="saler" name="salerbuyer" form="carform">
              <option value="Saler">Saler</option>
              <option value="Buyer">Buyer</option>
            </select>
          </Form.Group> */}

          <Form.Group className="mb-3 name-signup ">
            <Form.Label>Chose saler / Buyer</Form.Label>
            <Form.Select
              onClick={handlekeypress}
              aria-label="Default select example"
              id="saler"
              name="salerbuyer"
              required
            >
              <option value="Saler">Saler</option>
              <option value="Buyer">Buyer</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="name-image">
          <Form.Group
            className="mb-3 name-signup"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              onKeyDown={handlekeypress}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 profile"
            controlId="formBasicconfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onKeyDown={handlekeypress}
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
        </div>
        <div className="button-group">
          <Button
            disabled={buttondis}
            className="signup-btn"
            name="signupButon"
            variant="primary"
            type="submit"
          >
            SignUp
          </Button>
          <p className="or-option">OR</p>
          <Button
            onClick={handlegooglesignup}
            className="signup-btn"
            variant="primary"
            id="google-btn"
          >
            SignUp With Google
          </Button>
        </div>

        <p className="have-acount">
          Have a Acount??? please{" "}
          <Link className="signuplogin" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignupPages;
