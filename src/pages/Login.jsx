import React, { useState } from "react";
import { useLoginMutation } from "../services/appAPI";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import "./css/Login.css";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginUser, { isLoading, err }] = useLoginMutation();
  const navigate = useNavigate();
  const HandleLogin = (e) => {
    e.preventDefault();
    //login user
    loginUser({
      email: Email,
      password: Password,
    }).then(({ data }) => {
      if (data) {
        navigate("/Chat");
        console.log(data);
      }
    });
  };
  const Formstyle = {
    width: "80%",
    maxwidth: "500px",
  };
  return (
    <Container>
      <Row>
        <Col md={5} className="Login__bg"></Col>

        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={Formstyle} onSubmit={HandleLogin}>
            <h1 className="text-center"> Login To Chat</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={Email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={Password}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Dont Have an account? <Link to="/Signup">Sign up</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
