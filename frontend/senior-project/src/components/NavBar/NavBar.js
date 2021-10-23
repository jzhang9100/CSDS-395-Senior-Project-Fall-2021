import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './streads-logo.png';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar expand='lg' id='navbar'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            width='50'
            height='50'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Brand href='#home' id = 'streads' className='me-auto'>
          Streads
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='justify-content-end'>
            <Nav.Link href='#home' id='account-button' className='button'>
              <p className='button-text'>Account</p>
            </Nav.Link>
            <Nav.Link href='#link' id='search-button' className='button'>
              <p className='button-text'>Search</p>
            </Nav.Link>
            <Nav.Link href='#link' id='signin-button' className='button'>
              <p className='button-text'>Sign In</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
