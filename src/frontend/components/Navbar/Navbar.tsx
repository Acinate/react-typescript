import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

export interface INavbar {}

const marginRight: React.CSSProperties = {
  marginRight: '0.5rem'
};

export default class BNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Typescript</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <div>
              <Button style={marginRight} variant="info" href="/#">
                Login
              </Button>
              <Button variant="outline-info" href="/#">
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
