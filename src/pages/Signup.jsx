import React, { useState } from "react";
import { useSignupMutation } from "../services/appAPI";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import "./css/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { bot } from "../assets";

const Signup = () => {
  //credentials
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //image upload
  const [image, setImage] = useState(null);
  const [Uploading, setUploading] = useState(false);
  const [Imgpreview, setImgpreview] = useState(null);

  //signup user
  const [signupUser, { isLoading, err }] = useSignupMutation();
  const navigate = useNavigate();
  const Formstyle = {
    width: "80%",
    maxwidth: "500px",
  };

  const validateImg = (e) => {
    let file = e.target.files[0];
    if (file.size >= 1048576) {
      alert("File size is too large");
      return;
    } else {
      setImage(file);
      setImgpreview(URL.createObjectURL(file));
      // setUploading(true);
    }
  };

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "makechatapp");
    try {
      setUploading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dgb2nv167/image/upload",
        {
          method: "POST",
          body: data,
          "Access-Control-Allow-Origin": "*",
        }
      );
      const urlfile = await res.json();
      setUploading(false);
      return urlfile.url;
    } catch (err) {
      setUploading(false);
      console.log(err);
    }
  };
  const HandleSignup = async (e) => {
    e.preventDefault();
    console.log("clicked");
    if (!image) return alert("Please select an image");
    else {
      const url = await uploadImage(image);
      console.log("before sign up after upload",url);
      const obj = {
        name: Name,
        email: Email,
        password: Password,
        picture: url,
      };
      console.log("it will be passed to make the user",obj);
      signupUser(obj).then(({ data }) => {
        if (data) {
          navigate("/Chat");
          console.log("After making of user after goin to chat screen",data.user);
        }
      });
    }
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
                name="Name"
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
                name="Email"
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
                name="Password"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              {Uploading ? "Signing you up..." : "Create Account"}
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
