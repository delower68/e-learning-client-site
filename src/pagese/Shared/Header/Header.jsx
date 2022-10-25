import React, { useContext } from "react";
import Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShopware, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import RightSideNav from "../RightSideNav/RightSideNav";

const Header = () => {

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
            <FaShopware />
            -Learning
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button variant="light">
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
            <Nav.Link to='/'>
                {
                  user?.uid?
                  <>
                    <span>{user?.displayName}</span>
                    <img style={{height:"40px"}}  sec={user?.photoURL} alt=''></img>
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
              {user?.photoURl?
                 <img style={{height:"40px"}} roundedCircle sec={user?.photoURl} alt=''></img>
                 :
                 <FaUser></FaUser> 
              }
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
