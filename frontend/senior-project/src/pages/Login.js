import React from 'react';
import { Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../styles/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value});
      console.log(event.target.value);
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
      console.log.log(event.target.value);
  }

  handleSubmit(event) {
    fetch('http://localhost:3001/api/response', {
      method: 'POST',
      headers: {
        'Accept': 'applicatoin/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).this((response) => {console.log(response)});
  }

  render() {

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
              onChange = {this.onUsernameChange}
            />
            <input
              type='text'
              className='login-button'
              id='password'
              placeholder='Password'
              onChange = {this.onPasswordChange}
            />
            <button id='submit-button' onClick = {this.handleSubmit}>Log In</button>
          </div>
          <div className = "register-link">
            <p className = "register-text">New to Streads?</p>
            <LinkContainer to="/signup" className="">
              <Nav.Link className="register-button">
                <p className="register-button-text">Register Here!</p>
              </Nav.Link>
            </LinkContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;