import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {setUser, googleSignIn} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        })
    }

  return (
    <div>
      <Container>
        <h1 className="text-center">Login Here !!!</h1>
        <Form className="border p-2 rounded">
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
            <Button variant="success" type="submit" >
            LOGIN
          </Button>
            </div>
          
          <div className="text-center mt-4">
            <p><small>Or, Sign Up using</small></p>
            <hr className="w-50 mx-auto" />
            <button onClick={handleGoogleSignIn} className="me-2 btn btn-primary">
            <FaGoogle className="me-2"></FaGoogle>Google
            </button>
            <button className=" btn btn-primary">
            <FaGithub className="me-2"></FaGithub>Github
            </button>
        </div>

        <div className="text-center mt-2">
            <p><small>Do not have an account? <Link to='/register'>Register here</Link></small></p>

        </div>
        </Form>
        
      </Container>
    </div>
  );
};

export default Login;
