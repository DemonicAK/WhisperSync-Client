import React from "react";
import { Sidebar, Messageform } from "../components";
import { Row, Col, Button, Form, Container } from "react-bootstrap";

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className=" border-bg-black " >
          <Sidebar />
        </Col>
        <Col md={8} >
          <Messageform />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
