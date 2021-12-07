import React from 'react';
import { Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../styles/Login.css';
export default function Login() {
  return (
    <div className='login-body'>
      <div className='login-box'>
        <h1>Log In</h1>
        <div className='input-box'>
          <input
            type='text'
            className='login-button'
            id='username'
            placeholder='Username'
          />
          <input
            type='text'
            className='login-button'
            id='password'
            placeholder='Password'
          />
          <button id='submit-button'>Log In</button>
        </div>
        <div className = "register-link">
          <p>New to Streads?</p>
          <LinkContainer to="/signup" className="my-2 ms-4 shadow">
            <Nav.Link className="register-button">
              <p className="register-text">Register Here!</p>
            </Nav.Link>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}
