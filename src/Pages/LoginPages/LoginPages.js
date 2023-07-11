import React from "react";
import "./LoginPages.css";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import "./LoginPages.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const LoginPages = () => {
  const { loginuserwithemailpassword, googlecreateuser, passwprdreset } =
    useContext(AuthContext);
  const [passworderror, setpassworderror] = useState("");
  const [sucessmessage, setsuccessmessage] = useState(false);
  const [useremail, setuseremail] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handlesubmit = (event) => {
    setsuccessmessage(false);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setpassworderror("");
    loginuserwithemailpassword(email, password)
      .then((req) => {
        const user = req.user;
        const currentuser = { email: user.email };
        setsuccessmessage(true);
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setpassworderror(error.message);
      });
  };

  const handlegooglesignin = () => {
    setpassworderror("");
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setpassworderror(error.message);
      });
  };
  const handlesetemail = (event) => {
    const email = event.target.value;
    setuseremail(email);
  };
  const resetpasswordhandler = () => {
    if (!useremail) {
      toast("Pleas Enter Your Email", {
        position: "top-center",
        autoClose: 500,
      });
      return;
    }
    passwprdreset(useremail)
      .then(() => {
        toast("Please Check Your Email", {
          position: "top-center",
          autoClose: 500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="signup-container login-con">
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
        <h5 className="mb-3 text-center">Login Please !!!</h5>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handlesetemail}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="signup-btn login-btn"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        <p className="or-option">OR</p>
        <Button
          onClick={handlegooglesignin}
          className="signup-btn login-btn"
          variant="primary"
          id="google-btn"
        >
          SignIn With Google
        </Button>
        <p className="have-acount">
          New User???{" "}
          <Link className="signuplogin" to="/signup">
            Create Acount
          </Link>
        </p>
        <p className="have-acount">
          Forget Password?{" "}
          <Link onClick={resetpasswordhandler} className="signuplogin reset">
            Reset PassWord
          </Link>
        </p>
      </Form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LoginPages;
