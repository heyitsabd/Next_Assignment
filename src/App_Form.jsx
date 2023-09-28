import React, { useState } from 'react';
import { Container, Row, Col, Form, Button,CloseButton } from 'react-bootstrap';

const App_Form = (props) => {

  return (props.trigger)?(
    <div className='popup'>
    <Container className='popup-inner'>
      <CloseButton style={{marginLeft:'50%'}} onClick={()=> props.setTrigger(false)}/>
      <Row>
        <Col xs={6} md={6} style={{marginLeft:'auto',marginRight:'auto'}}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formComments">
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your comments" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  ):" ";
}

export default App_Form;
