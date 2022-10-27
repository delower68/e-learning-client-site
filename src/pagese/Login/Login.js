import React, { useState } from "react";
import { useContext } from "react";
import { Button, Form,  } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGithub, FaGoogle } from "react-icons/fa";



const Login = () => {
  const {signIn, auth, setUser} = useContext(AuthContext);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const location = useLocation()

  const from = location.state?.from?.pathname || '/' ;

  const {providerLogin} =useContext(AuthContext);
    


  // login in with google 
  const googleProvider = new GoogleAuthProvider();
  
    const handelGoogleSignIn = ()=>{
          providerLogin(googleProvider)
          .then(result => {
              const user = result.user;
              setUser(user)
              navigate(from , {replace: true});

          })
          .catch(error => console.error(error))
      } 


      // login with Github here

      const gitHubProvider = new GithubAuthProvider()

      const handelGitHubSignIn = ()=>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
          const user = result.user;
          setUser(user);
          navigate(from , {replace: true});
        })
        .then(error => console.error(error))
      }

      // form submit here 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    // create user here 
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        form.reset();
        setError("");
        navigate(from , {replace: true});
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    
    <div className="mx-auto">

      <h1 className="mt-5">Please Login </h1>

      <Form onSubmit={handleSubmit} className="mt-5 " style={{ width: '60%' }}>
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Don't have any account. Go to <Link to='/register'>Sing up</Link>
          </p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className='mt-3 mb-5'>
        <Button variant='dark'className="me-3" onClick={handelGoogleSignIn} ><FaGoogle/> Google</Button>
        
        <Button variant='dark' onClick={handelGitHubSignIn} ><FaGithub/> GitHub</Button>
        </div>
        <Form.Text className="text-danger mb-5">{error}</Form.Text>
      </Form>
    </div>
    
  );
};

export default Login;
