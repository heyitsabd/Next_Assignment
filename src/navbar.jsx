import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function App() {
  return (
    <Navbar bg="light" expand="lg" style={{ border: '1px solid lightgray', padding: '20px' }}>
      <Container>
        <Navbar.Brand href="#home">Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">Features</Nav.Link>
            <Nav.Link href="#features" className="mx-2">Enterprise</Nav.Link>
            <Nav.Link href="#support" className="mx-2">Support</Nav.Link>
            <Nav.Link href="#pricing" className="mx-2">Pricing</Nav.Link>
            <Button variant="primary" className="mx-2 button-hover">SignUp</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
