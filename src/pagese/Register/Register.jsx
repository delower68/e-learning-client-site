import { Button } from 'react-bootstrap';
import React , {useState}from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Register = () => {

  const {createUser,updateUserProfile} =useContext(AuthContext);
  const [error, setError] = useState();


    // using email and password and create an user  
  const handleSubmit = event =>{
    event.preventDefault();
        const form = event.target;
        const name = form.name.value ;
        const photoURL = form.photoURL.value
        const email = form.email.value ;
        const password = form.password.value;
        console.log(name, email , password, photoURL);


        createUser(email, password)
        .then(result => {
          const user = result.user;
          setError('')
          form.reset();
          console.log(user);
          handleUpdateUserProfile(name , photoURL)
        })
        .catch(error => {
          console.error(error);
          setError(error.message)
        });




        // handleUserProfle 
      const handleUpdateUserProfile =(name , photoURL)=>{
        const profile = {
          displayName: name,
          photoURL : photoURL

        }  
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error =>console.error(error))
      }


  }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='mt-5' style={{ width: '50%' }}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name='name' placeholder="Enter name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your photoURL</Form.Label>
          <Form.Control type="photoURL" name='photoURL'  placeholder="Photo URL" />
          
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Already have an account? Go to <Link to='/login'>Login</Link>
          </p>
        </Form.Group>

        
        <Button variant="primary" type="submit" >
          Sign In
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
        </div>
    );
};

export default Register;