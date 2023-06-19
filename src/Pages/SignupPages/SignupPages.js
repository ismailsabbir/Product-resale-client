import React from "react";
import "./SignupPages.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
const SignupPages = () => {
  const { createuserwithemailpassword } = useContext(AuthContext);
  const handlesubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createuserwithemailpassword(email, password)
      .then((req) => {
        const user = req.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="signup-container">
      {/* <p>{sucessmessage}</p> */}
      <Form onSubmit={handlesubmit} className="form">
        <h5 className="mb-6 text-center signuplease">SignUp Please !!!</h5>
        <div className="name-image">
          <Form.Group className="mb-3 name-signup" controlId="formBasicname">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3 profile" controlId="formBasicprofile">
            <Form.Label>Chose Profile</Form.Label>
            <Form.Control name="profile" type="file" required />
          </Form.Group>
        </div>
        <div className="email-saler-buyer">
          <Form.Group className="mb-3 name-signup" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 name-signup " controlId="formBasicEmail">
            <Form.Label>Chose saler / Buyer</Form.Label> <br />
            <select id="saler" name="saler-buyer" form="carform">
              <option value="volvo">Saler</option>
              <option value="saab">Buyer</option>
            </select>
          </Form.Group>
        </div>
        <div className="name-image">
          <Form.Group
            className="mb-3 name-signup"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
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
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
        </div>
        <div className="button-group">
          <Button className="signup-btn" variant="primary" type="submit">
            Submit
          </Button>
          <p className="or-option">OR</p>
          <Button
            className="signup-btn"
            variant="primary"
            type="submit"
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
