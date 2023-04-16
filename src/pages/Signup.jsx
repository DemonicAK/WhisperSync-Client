import React, { useState } from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import "./css/Signup.css";
import { Link } from "react-router-dom";
import { bot } from "../assets";

const Signup = () => {
  const validateImg = (e) => {
    let file = e.target.files[0];
    if (file.size >= 1048576) {
      alert("File size is too large");
      return;
    } else {
      setImage(file);
      setImgpreview(URL.createObjectURL(file));
      setUploading(true);
    }
  };

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chatapp");
    data.append("cloud_name", "dmsj7kx6d");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmsj7kx6d/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const resdata = await res.json();
    console.log(resdata);
    return resdata.url; 
  }
  const HandleSignup = async (e) => {
    e.preventDefault();

    if (!image) return alert("Please select an image");
    else {
      const url = await uploadImage(image);
    }
  };
  //credentials
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //image upload
  const [image, setImage] = useState(null);
  const [Uploading, setUploading] = useState(false);
  const [Imgpreview, setImgpreview] = useState(null);

  const Formstyle = {
    width: "80%",
    maxwidth: "500px",
  };
  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={Formstyle} onSubmit={HandleSignup}>
            <h1 className="text-center"> Create Account</h1>
            <div className="signup-profile-pic__container">
              <img
                src={Imgpreview || bot}
                alt=""
                className="signup-profile-pic"
              />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png,image/jpg,image/jpeg"
                onChange={validateImg}
              />
            </div>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={Name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={Email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
              />
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
                Already Have an account? <Link to="/Login">Login </Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="Signup__bg"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
