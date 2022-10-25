import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShopware } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <FaShopware />
            -Learning
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button text-light variant="light">
                <Link className="me-2" to="/">
                  Home
                </Link>
              </Button>
              <Button text-light variant="light">
                <Link className="me-2" to="/courses">
                  Courses
                </Link>
              </Button>
              <Button text-light variant="light">
                <Link className="me-2" to="/blog">
                  Blog
                </Link>
              </Button>
              <Button text-light variant="light">
                <Link>FAQ</Link>
              </Button>
            </Nav>
            <Nav>
              <Button variant="outline-dark" className="me-2">
                <Link to="/register">Sing Up</Link>
              </Button>
              <Button variant="outline-dark">
                <Link eventKey={2} to="/login">
                  Login
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
