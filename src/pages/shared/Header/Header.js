import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="website-name">
          <img src={Logo} alt="" className="logo"/>
            Expert Programmer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Courses</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
              <button className="btn btn-secondary">Dark</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
