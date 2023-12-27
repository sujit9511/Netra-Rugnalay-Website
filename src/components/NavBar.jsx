import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tele Netra Rugnalay </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link  href="#treatments">Treatments</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#Video">Video</Nav.Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Phone</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
