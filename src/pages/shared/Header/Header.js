import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from '../../../assets/logo.png';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import './Header.css';

const Header = () => {
    const {user, logOut, setUser} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            setUser({});
        })
        .catch((error) => {
            setUser({});
          console.error(error);
        })
      }

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
              <Nav.Link href="#pricing"><Link to='/login'>Login</Link></Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          <nav>
          <>
              {user?.uid && (
                <>
                  <img src={user.photoURL} alt="" className="rounded-circle" style={{width: '30px'}} title={user.displayName}/>
                  <Button variant="light" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </>
              )} 
              
            </>
            <button className="btn btn-secondary">Dark</button>
          </nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
