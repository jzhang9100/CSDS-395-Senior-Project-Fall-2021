import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './streads-logo.png';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            width='50'
            height='50'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Brand href='#home' className='me-auto'>
          Streads
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className='justify-content-end'>
          <Nav.Link href='#home' id='account-button' className='button'>
            Account
          </Nav.Link>
          <Nav.Link href='#link' id='search-button' className='button'>
            Search
          </Nav.Link>
          <Nav.Link href='#link' id='signin-button' className='button'>
            Sign In
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
