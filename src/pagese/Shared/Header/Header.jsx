import React, { useContext } from "react";
import {Button}  from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShopware } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import RightSideNav from "../RightSideNav/RightSideNav";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ReactSwitch from 'react-switch' ;  
import { ThemeContext } from "../../../App";



const Header = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  const {user,logOut, setUser} = useContext(AuthContext)

  const handelLogOut = ()=>{
    logOut()
    .then(()=>{
      setUser({})
    })
    .catch(error => console.error(error))
  }



  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Link>
            <FaShopware />
            
            -Learning
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button variant="light">
                <Link className="me-2" to="/">
                  Home
                </Link>
              </Button>
              <Button variant="light">
                <Link className="me-2" to="/courses">
                  Courses
                </Link>
              </Button>
              <Button  variant="light">
                <Link className="me-2" to="/blog">
                  Blog
                </Link>
              </Button>
              <Tippy content='Question'>
              <Button  variant="light">
                <Link>FAQ</Link>
              </Button>
              </Tippy>
            </Nav>
            <Nav>
            <Nav.Link to='/'>
                {
                  user?.uid?
                  <>
                   
                    <Tippy content={user?.displayName}>
                      <img style={{height:"40px"}}  sec={user?.photoURL} alt=''></img>
                      </Tippy>
                    <Button variant='light' onClick={handelLogOut}><Link to='/login'>Log out</Link></Button>
                  </>
                  :
                  <>
                    <Button variant='light'><Link to='/login'>Login</Link></Button>
                    <Button variant='light'><Link to='/register'>Register</Link></Button>
                  </>
                }
               
              
              </Nav.Link>


              <Nav.Link>
               <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}>


               </ReactSwitch>
              </Nav.Link>


            </Nav>
            <div className="d-lg-none">
                <RightSideNav></RightSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </div>
  );
};

export default Header;
