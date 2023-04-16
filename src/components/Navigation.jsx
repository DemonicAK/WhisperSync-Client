import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import { chatlogo } from "../assets";

const Navigation = () => {
  const imgstyle = {
    width: "50px",
    height: "50px",
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={chatlogo} alt="Logo" style={imgstyle} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
