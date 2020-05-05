import React, {useState} from "react";
import { render } from "react-dom";
import { Form,Col,Button, Container,ButtonGroup} from "react-bootstrap";
import Modal from "./modal";


const Signup = (
  
  { 
    isUserAdmin,
   }) =>
     {

  return (
    <div>
     
 
  
    {isUserAdmin==true?
      <Container className="mar-gin">
    <Form>
    <Form>
  <Form.Row>
    <Col>
    <Form.Label>Username*</Form.Label>
      <Form.Control placeholder="Username*" />
    </Col>
   
  </Form.Row>
</Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Email*</Form.Label>
      <Form.Control type="email" placeholder="Your Email*" />
    </Form.Group>
   
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Your Phone*</Form.Label>
      <Form.Control type="tel" placeholder="Your Phone*" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Degree</Form.Label>
      <Form.Control type="text" placeholder="Degree*" />
    </Form.Group>
   
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Major Subject*</Form.Label>
      <Form.Control type="text" placeholder="Subject*" />
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Password*</Form.Label>
      <Form.Control type="password" placeholder="Password*" />
    </Form.Group>
   
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password*</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password*" />
    </Form.Group>
    </Form.Row>


  <Form.Row>
   

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" value="Gender">
        <option>Male</option>
        <option>Female</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>School Name*</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridState">
    <Form.Check type="checkbox" label="confirm" />
  </Form.Group>

  <Button variant="primary btn btn-lg" type="submit">
   Register
  </Button>
</Form>
<div margin=".1px">Already a member? <Modal /></div>
</Container>
: <Container className="mar-gin">
<Form>
<Form>
<Form.Row>
<Col>
<Form.Label>Username*</Form.Label>
  <Form.Control placeholder="Username*" />
</Col>

</Form.Row>
</Form>
<Form.Row>
<Form.Group as={Col} controlId="formGridEmail">
<Form.Label>Email*</Form.Label>
  <Form.Control type="email" placeholder="Your Email*" />
</Form.Group>

<Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Your Phone*</Form.Label>
  <Form.Control type="tel" placeholder="Your Phone*" />
</Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Class</Form.Label>
      <Form.Control type="text" placeholder="Class*" />
    </Form.Group>
   
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>City*</Form.Label>
      <Form.Control type="text" placeholder="City*" />
    </Form.Group>
    </Form.Row>
<Form.Row>
<Form.Group as={Col} controlId="formGridEmail">
<Form.Label>Password*</Form.Label>
  <Form.Control type="password" placeholder="Password*" />
</Form.Group>

<Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Confirm Password*</Form.Label>
  <Form.Control type="password" placeholder="Confirm Password*" />
</Form.Group>
</Form.Row>


<Form.Row>


<Form.Group as={Col} controlId="formGridState">
  <Form.Label>Gender</Form.Label>
  <Form.Control as="select" value="Gender">
    <option>Male</option>
    <option>Female</option>
  </Form.Control>
</Form.Group>

<Form.Group as={Col} controlId="formGridZip">
  <Form.Label>School Name*</Form.Label>
  <Form.Control />
</Form.Group>
</Form.Row>

<Form.Group as={Col} controlId="formGridState">
<Form.Check type="checkbox" label="confirm" />
</Form.Group>

<Button variant="primary btn btn-lg" type="submit">
Register
</Button>

</Form>
<div   margin=".1px">Already a member? <Modal /></div>
</Container>
    }





    </div>
  );
        
};

export default Signup;