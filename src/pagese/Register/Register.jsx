import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div>
            <Form className='mt-5' style={{ width: '50%' }}>
        
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
        <Form.Check 
        
        type="checkbox" 
        label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>

        
        <Button variant="primary" type="submit" disabled>
          Sign In
        </Button>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
        </div>
    );
};

export default Register;