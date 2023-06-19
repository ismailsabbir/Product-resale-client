import React from "react";
import "./LoginPages.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
const LoginPages = () => {
  const { loginuserwithemailpassword } = useContext(AuthContext);
  const handlesubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginuserwithemailpassword(email, password)
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
      <Form onSubmit={handlesubmit} className="form">
        <h5 className="mb-3 text-center">SignUp Please !!!</h5>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className="signup-btn" variant="primary" type="submit">
          Submit
        </Button>
        <p className="have-acount">
          New User???{" "}
          <Link className="signuplogin" to="/signup">
            Create Acount
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPages;
