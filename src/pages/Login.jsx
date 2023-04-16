import React from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import "./css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Form style={Formstyle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Submit
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
