import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { setUser, googleSignIn, githubSignIn, signIn } =
    useContext(AuthContext);
    const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        alert("Successfully Login");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
  };
  

  return (
    <div>
      <Container>
        <h1 className="text-center">Login Here !!!</h1>
        <Form onSubmit={handleSubmit} className="border p-2 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Text className="text-danger d-block">
            {error}
          </Form.Text>
          <div className="text-center">
            <Button variant="success" type="submit">
              LOGIN
            </Button>
          </div>

          <div className="text-center mt-2">
            <p>
              <small>
                Do not have an account?{" "}
                <Link to="/register">Register here</Link>
              </small>
            </p>
          </div>
        </Form>
        
      </Container>
      <div className="text-center mt-4">
          <p>
            <small>Or, Sign Up using</small>
          </p>
          <hr className="w-50 mx-auto" />
          <button onClick={handleGoogleSignIn} className="me-2 btn btn-primary">
            <FaGoogle className="me-2"></FaGoogle>Google
          </button>
          <button onClick={handleGithubSignIn} className=" btn btn-primary">
            <FaGithub className="me-2"></FaGithub>Github
          </button>
        </div>
    </div>
  );
};

export default Login;
