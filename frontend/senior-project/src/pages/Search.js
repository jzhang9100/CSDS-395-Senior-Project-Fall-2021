import React, { useState, useEffect } from "react";
import "../styles/Search.css";
import { Card, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { updateStockInfo, updateTicker } from "../App";

export default function Search({ token }) {
  const [searchTerm, setSearchTerm] = useState(""); //the ticker symbol searched for
  const [stockInfo, setStockInfo] = useState("");
  const [stockQuote, setStockQuote] = useState("");
  const [profileInfo, setProfileInfo] = useState("");
  const [portfolio, setPortfolio] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetchStock();
    document.getElementById("resultArea").style.visibility = "visible";
  }

  function fetchStock() {
    const apiKey = "BFW1POG1RFAENYS8";
    const finnhubAPI = "c1se9aqad3i9o8uaclc0";
    var ticker = searchTerm.toUpperCase();
    let stockInfoAPI = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`;
    let currentPriceAPI = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubAPI}`;
    updateTicker(ticker);

    fetch(currentPriceAPI)
      .then((response) => response.json())
      .then((response) => {
        if (response != null) {
          setStockQuote(response);
        }
      });

    fetch(stockInfoAPI)
      .then((response) => response.json())
      .then((response) => {
        if (response["Note"] == null) {
          setStockInfo(response);
          updateStockInfo(response);
        }
      });
  }

  async function updateProfile() {
    fetch(`http://localhost:3001/profiles?token=${token}`)
      .then((response) => response.json())
      .then((response) => {
        setProfileInfo(response["user_data"][0]);
        setPortfolio(response["stock_data"]);
      });
  }

  async function addToPortfolio() {
    fetch(`http://localhost:3001/profiles/addStock`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: profileInfo.user_id, stock_ticker: stockInfo["Symbol"] }),
    }).then(() => {
      updateProfile();
    });
  }

  async function removeFromPortfolio() {
    fetch(`http://localhost:3001/profiles/removeStock`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: profileInfo.user_id, stock_ticker: stockInfo["Symbol"] }),
    }).then(() => {
      updateProfile();
    });
  }

  useEffect(() => {
    updateProfile();
  }, []);

  return (
    <div className="search-body text-center col-md-12">
      <div className="Search-Bar mx-auto w-50">
        <h1>Search Stock</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="shadow"
            type="text"
            placeholder="Enter Stock Symbol..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <input type="submit" className="search-button ms-4 shadow" />
        </form>
      </div>

      <div id="resultArea" className="Results-Area">
        <Card className="Result-Box mx-auto w-50">
          <Card.Header className="Stock-Card-Header">{stockInfo["Symbol"]}</Card.Header>
          <Card.Body>
            <div className="Stock-Info">
              <Table borderless>
                <thead>
                  <tr>
                    <th>{stockInfo["Symbol"]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Company Name</td>
                    <td>{stockInfo["Name"]}</td>
                  </tr>
                  <tr>
                    <td>Stock Exchange</td>
                    <td>{stockInfo["Exchange"]}</td>
                  </tr>
                  <tr>
                    <td>Current Stock Price</td>
                    <td>${stockQuote["c"]}</td>
                  </tr>
                  <tr>
                    <td>52 Week High</td>
                    <td>${stockInfo["52WeekHigh"]}</td>
                  </tr>
                  <tr>
                    <td>52 Week Low</td>
                    <td>${stockInfo["52WeekLow"]}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="d-flex justify-content-center">
              <LinkContainer to="/stock">
                <button type="button" className="button view-stock-button me-2 shadow">
                  View Stock
                </button>
              </LinkContainer>
              <button type="button" className="button view-stock-button me-2 ms-2 shadow" onClick={addToPortfolio}>
                Add
              </button>
              <button type="button" className="button view-stock-button ms-2 shadow" onClick={removeFromPortfolio}>
                Remove
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
