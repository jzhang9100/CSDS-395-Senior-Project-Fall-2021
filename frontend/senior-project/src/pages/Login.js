import React, { useState } from 'react';
import '../styles/Login.css';

async function login(loginJson) {
 return fetch('http://localhost:3001/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(loginJson)
 }).then(response => response.json())
   .then(response => response.token)
}

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
  const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
    e.preventDefault();
    const token = await login({
      username,
      password
    });
    setToken(token);
    window.location = '/';
  }
    
  return (
    <div className='login-body'>
      <div className='login-box'>
        <h1>Log In</h1>
        <div className='input-box'>
          <input
            type='text'
            className='login-button'
            id='username'
            placeholder='username'
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type='password'
            className='login-button'
            id='password'
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
          <button id='submit-button' onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
}
