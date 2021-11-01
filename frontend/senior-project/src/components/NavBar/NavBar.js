import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./streads-logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" id="navbar">
        <Container>
          <LinkContainer exact to="/">
            <Navbar.Brand>
              <img src={logo} alt="streads logo" width="50" height="50" className="d-inline-block align-top" />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer exact to="/">
            <Navbar.Brand id="streads" className="me-auto">
              Streads
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
            <LinkContainer to="/feed">
                <Nav.Link className="button">
                  <p className="button-text">Feed</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link id="account-button" className="button">
                  <p className="button-text">Account</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/search">
                <Nav.Link id="search-button" className="button">
                  <p className="button-text">Search</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link id="signin-button" className="button">
                  <p className="button-text">Sign In</p>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /> <br />
    </div>
  );
}
