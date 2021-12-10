import React, { useState, useEffect } from "react";
import CompanyInfo from "../components/StockView/CompanyInfo";
import StockGraph from "../components/StockView/StockGraph";
import StockStats from "../components/StockView/StockStats";
import News from "../components/StockView/News";
import Comps from "../components/StockView/Comps";
import "../components/StockView/StockGraph.css";
import "../components/StockView/StockStats.css";
import "../components/StockView/CompanyInfo.css";
import "../components/StockView/News.css";
import "../components/StockView/Comps.css";

export default function Stock({ stockInfo }) {
  const [historicalData, setHistoricalData] = useState("");

  console.log(stockInfo);
  function fetchHistoricalData() {
    const apiKey = "BFW1POG1RFAENYS8";
    let stockInfoAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stockInfo["Symbol"]}&outputsize=compact&apikey=${apiKey}`;

    fetch(stockInfoAPI)
      .then((response) => response.json())
      .then((response) => {
        if (response["Note"] == null) {
          console.log(response);
          setHistoricalData(response);
        }
      });
  }

  useEffect(() => {
    fetchHistoricalData();
  }, []);

  console.log(stockInfo);
  return (
    <div className="search-body text-center col-md-12">
      <div>
        <p>{stockInfo["Symbol"]}</p>
        <StockGraph name="Stock Ticker (Stock Name)"></StockGraph>
        <StockStats></StockStats>
        <CompanyInfo></CompanyInfo>
        <News></News>
        <Comps></Comps>
      </div>
    </div>
  );
}
