import * as React from "react";

import { Navbar as BNavbar, Nav, NavbarBrand, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

export interface INavbar { }

const marginRight: React.CSSProperties = {
  marginRight: "0.5rem"
}

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <BNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <BNavbar.Brand href="/home">React Typescript</BNavbar.Brand>
            <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <BNavbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <div>
                <Button style={marginRight} variant="info" href="/login">Login</Button>
                <Button variant="outline-info" href="/register">Register</Button>
              </div>
            </BNavbar.Collapse>
          </Container>
        </BNavbar>
      </>
    );
  }
}
