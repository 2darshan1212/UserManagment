import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../redux/slices/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formdata = new FormData();
  const [input, setInput] = useState({
    name: "",
    city: "",
    gender: "",
    email: "",
  });
  const [file, setFile] = useState();

  const handleCancle = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formdata.append("name", input.name);
    formdata.append("city", input.city);
    formdata.append("gender", input.gender);
    formdata.append("email", input.email);
    formdata.append("profile", file);
    await axios.post("http://localhost:3000/api/v1/createuser", formdata);
    dispatch(getAllUsers());
    navigate("/");
  };

  return (
    <div className="container flex  items-center justify-content-center">
      <div>
        <h2
          className="text-center text-white p-2 m-2"
          style={{ backgroundColor: "blueviolet" }}
        >
          Add New User
        </h2>
      </div>
      <div>
        <Form className="p-2 m-2" onSubmit={handleSubmit}>
          <Form.Group className="mb-1" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check
                inline
                label="Male"
                type="radio"
                name="gender"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="radio"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="city"
              value={input.city}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicProfile">
            <Form.Label>Profile</Form.Label>
            <Form.Control
              type="file"
              placeholder="Select profile picture"
              name="profile"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary  " className="m-3 " type="submit">
            Submit
          </Button>
          <Button
            variant="danger  "
            className="m-3"
            type="submit"
            onClick={handleCancle}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
