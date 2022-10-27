import React, { useContext } from "react";
import Button  from "react-bootstrap/Button";
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
import Image from 'react-bootstrap/Image'
import './Header'



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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  sticky="top" >
        <Container>
        
           
          <h4 className="me-3">
            <FaShopware />
            
            -Learning
         
            </h4>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link className="me-2" to="/">
              <Button variant="light">
                  Home
              </Button>
                </Link>
                <Link className="me-2" to="/courses">
              <Button variant="light">
                  Courses
              </Button>
                </Link>
                <Link className="me-2" to="/blog">
              <Button  variant="light">
                  Blog
              </Button>
                </Link>

              <Tippy content='Your Question'>
                <Link to='/question'>
              <Button  variant="light">
                FAQ
              </Button>
                </Link>
              </Tippy>

            </Nav>
            <Nav>
            <Nav.Link to='/'>
                {
                  user?.uid?
                  <>
                   
                    <Tippy content={user?.displayName}>
                      <Image style={{height:"45px"}} className='me-2' roundedCircle src={user?.photoURL} ></Image>
                      </Tippy>
                      <Link to='/login'><Button variant='light' onClick={handelLogOut}>Log out</Button></Link>
                  </>
                  :
                  <>
                    <Link to='/login'><Button className="me-2" variant='light'>Login</Button></Link>
                    <Link to='/register'><Button variant='light'>Register</Button></Link>
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
