import React from "react";
import { useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./css/Messageform.css";
const Messageform = () => {
   const user = useSelector((state) => state.user);
  const HandleMessageSend = (e) => {
    e.preventDefault();
    console.log("Message Send");
  };
  const ButtonStyle = {
    width: "100%",
    backgroundColor: "orange",
  }
  return (
    <>
      <div className="message-output">
        {!user && <div className="alert alert-danger">login krlo vro</div>}
      </div>

      <Form onSubmit={HandleMessageSend}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
                disabled={!user}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button variant="primary" type="submit" style={ButtonStyle}
            disabled={!user}>
              <i className="fas fa-paper-plane"></i>{" "}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Messageform;
