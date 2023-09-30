import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./css/Home.css";
const Home = () => {
    const user = useSelector((state) => state.user);
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the world with with your friends </h1>
          <p>Chat app lets you connect with the world</p>
          <LinkContainer to={user? "/Chat":"/Login" }>
            <Button variant="success">
              Get Started
              <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg">

      </Col>
    </Row>
  );
};

export default Home;
