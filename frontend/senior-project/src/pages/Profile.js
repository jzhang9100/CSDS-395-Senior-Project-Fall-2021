import React, { useState, useEffect } from "react";
import { Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/Profile.css";

export default function Profile({ token }) {
  const [portfolio, setPortfolio] = useState([]);

  function updateProfile() {
    fetch(`http://localhost:3001/profiles?token=${token}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response["user_data"][0]);
        document.querySelector(".username").innerHTML = response["user_data"][0].username;
        document.querySelector(".bio").innerHTML = response["user_data"][0].bio;
      });
  }

  function getPortfolio() {
    fetch(`http://localhost:3001/profiles?token=${token}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response["stock_data"]);
        setPortfolio(response["stock_data"]);
      });
  }

  useEffect(() => {
    updateProfile();
    getPortfolio();
  }, []);

  return (
    <div className="body">
      <div className="profile-box">
        <img
          src="https://static8.depositphotos.com/1377527/930/i/600/depositphotos_9305418-stock-photo-middle-aged-businessman.jpg"
          alt=""
          className="profile-picture"
        />
        <div className="user-info">
          <h2 className="username">Username</h2>
          <p className="bio">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat at beatae ut, quos cupiditate repudiandae distinctio
            officia sequi autem. Odit, itaque eveniet. Modi, sint debitis!
          </p>
          <LinkContainer to="/editprofile">
            <Nav.Link className = "edit-profile-button">
              <p className = "edit-profile-text">Edit Profile</p>
            </Nav.Link>
          </LinkContainer>
        </div>
      </div>
      <h3 className="text-center mb-0 mt-2">Portfolio</h3>
      <div className="holdings d-flex">
        {portfolio.map((stock) => {
          return (
            <div className="stock mx-2" key={stock.ticker}>
              <div className="stock-info">
                {" "}
                <h2>{stock.ticker}</h2>
                <h3>{stock.name}</h3>
                <h3>{stock.exchange}</h3>
              </div>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZEKXu4vrjQ5Wr5ETrcx2EnE_H8oy4nbFIA&usqp=CAU"
                alt=""
                className="stock-image"
              />
            </div>
          );
        })}
      </div>
      {/* <div className="updates">
        <h3 className="w-100">Recent Updates</h3>
        <h4>Date: [Username] purchased xxx shares of XXX</h4>
      </div> */}
    </div>
  );
}
