import React from 'react';
import './Login.css';
export default function Login() {
  return (
    <div className='body'>
      <div className='login-box'>
        <h1>Log In</h1>
        <div className='input-box'>
          <input
            type='text'
            className='login-button'
            id='username'
            placeholder='username'
          />
          <input
            type='text'
            className='login-button'
            id='password'
            placeholder='password'
          />
          <button id='submit-button'>Log In</button>
        </div>
      </div>
    </div>
  );
}
