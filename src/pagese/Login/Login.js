import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="mx-auto">
      <Form className="mt-5 " style={{ width: '50%' }}>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </div>
  );
};

export default Login;
