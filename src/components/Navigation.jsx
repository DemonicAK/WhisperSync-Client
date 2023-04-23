import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { chatlogo } from "../assets";
import { useLogoutMutation } from "../services/appAPI";

const Navigation = () => {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutMutation();

  const HandleLogout = async (e) => {
    e.preventDefault();
    await logoutUser();
    // localStorage.removeItem("user");
    window.location.replace("/");
  };

  const logostyle = {
    width: "50px",
    height: "50px",
  };
  const userpictureStyle = {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    objectFit: "cover",
    borderRadius: "50%",
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={chatlogo} alt="Logo" style={logostyle} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/Chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
            {!user && (
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {!user && (
              <LinkContainer to="/Signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown
                title={
                  <>
                    <img src={user.picture} style={userpictureStyle} alt="" />
                    {user.name}
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Button variant="danger" onClick={HandleLogout}>
                    Log Out
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
