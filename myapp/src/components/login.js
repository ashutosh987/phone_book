import React, {useState} from "react";
import { render } from "react-dom";
import { Form,Col,Button, Container,ButtonGroup} from "react-bootstrap";
import Modal from "./modal";


const Login = (
  {}) =>
     {


  return (
    <div>
     
     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username*</Form.Label>
    <Form.Control type="text" placeholder="Username*" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>




 </div>
  )};
  export default Login;