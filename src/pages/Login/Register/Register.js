import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    

  return (
    <div>
      <Container>
        <h1 className="text-center">Registration Form!!!</h1>
        <Form className="border p-2 rounded">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required/>
          </Form.Group>

          <Form.Text className="text-danger d-block">
            We'll never share your email with anyone else.
          </Form.Text>
          <div className="text-center">
            <Button variant="success" type="submit">
              REGISTER
            </Button>
          </div>

          {/* <div className="text-center mt-4">
            <p>
              <small>Or, Sign Up using</small>
            </p>
            <hr className="w-50 mx-auto" />
            <button className="me-2 btn btn-primary">
              <FaGoogle className="me-2"></FaGoogle>Google
            </button>
            <button className=" btn btn-primary">
              <FaGithub className="me-2"></FaGithub>Github
            </button>
          </div> */}

          <div className="text-center mt-2">
            <p>
              <small>
                Already have an account?{" "}
                <Link to="/login">Login here</Link>
              </small>
            </p>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
