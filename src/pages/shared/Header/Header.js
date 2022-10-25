import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from '../../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="website-name">
            <Link  to='/'>
            <img src={Logo} alt="" className="logo"/>
            Expert Programmer
            </Link>
          
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features"><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/courses'>Courses</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/blog'>Blog</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/faq'>FAQ</Link></Nav.Link>
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
