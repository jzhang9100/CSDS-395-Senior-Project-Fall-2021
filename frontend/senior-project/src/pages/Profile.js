import React from 'react';
import '../styles/Profile.css';

function setToken(token) {
  var date = new Date();
  date = new Date(date.setDate(date.getDate() + 1)).toUTCString();
  document.cookie = `token=${token}; expires=${date};`;
}

function getToken() {
  var cookies = document.cookie.split('; ');
  for (var i = 0; i < cookies.length; i++) {
    if (cookies[i].includes('token=')) {
      return cookies[i].substring(6);
    }
  }

  return null;
}

async function updateProfile() {
  fetch(`http://localhost:3001/profiles?token=${getToken()}`)
    .then((response) => response.json())
    .then((response) => {
      document.querySelector('.username').innerHTML = response[0].username;
      document.querySelector('.bio').innerHTML = response[0].bio;
    });
}
export default function Profile() {
  updateProfile();
  return (
    <div className='body'>
      <div className='profile-box'>
        <img
          src='https://static8.depositphotos.com/1377527/930/i/600/depositphotos_9305418-stock-photo-middle-aged-businessman.jpg'
          alt=''
          className='profile-picture'
        />
        <div className='user-info'>
          <h2 className='username'>Username</h2>
          <p className='bio'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat at
            beatae ut, quos cupiditate repudiandae distinctio officia sequi
            autem. Odit, itaque eveniet. Modi, sint debitis!
          </p>
        </div>
      </div>
      <div className='holdings'>
        <div className='stock'>
          <div className='stock-info'>
            {' '}
            <h2>GME</h2>
            <h3>200 shares</h3>
          </div>

          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZEKXu4vrjQ5Wr5ETrcx2EnE_H8oy4nbFIA&usqp=CAU'
            alt=''
            className='stock-image'
          />
        </div>
      </div>
      <div className='updates'>
        <h3 className='w-100'>Recent Updates</h3>
        <h4>Date: [Username] purchased xxx shares of XXX</h4>
      </div>
    </div>
  );
}
