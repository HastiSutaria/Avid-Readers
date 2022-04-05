import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const Header = () => {
  return (
    <div>
        


        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Book-Recommendations</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Buy-Now</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header