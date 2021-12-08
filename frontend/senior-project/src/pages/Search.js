import React, { useState } from "react";
import "../styles/Search.css";
import { Card, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { updateStockTicker } from "../App";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState(""); //the ticker symbol searched for
  const [stockInfo, setStockInfo] = useState("");
  const [stockQuote, setStockQuote] = useState("");

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
          updateStockTicker(response["Symbol"]);
        }
      });
  }

  return (
    <div className="search-body text-center col-md-12">
      <div className="Search-Bar mx-auto w-50">
        <h1>Search Stock</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Stock Symbol..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <input type="submit" className="search-button ms-4" />
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
            <LinkContainer to="/stock">
              <button type="button" className="button view-stock-button">
                View Stock
              </button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
