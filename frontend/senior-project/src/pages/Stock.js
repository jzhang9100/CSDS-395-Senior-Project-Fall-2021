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
import { Card } from "react-bootstrap";

export default class Stock extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      stockQuote : null,
      historicalData : null,
      dailyData : null
    };
    console.log("ticker", this.props.ticker)
  }

  async componentDidMount() {
    const finnhubAPI = "c1se9aqad3i9o8uaclc0";
    var ticker = this.props.ticker
    let currentPriceAPI = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubAPI}`;

    const response = await fetch(currentPriceAPI);
    const json = await response.json();
    this.setState({ stockQuote: json });
  }

  fetchStock() {
    const finnhubAPI = "c1se9aqad3i9o8uaclc0";
    var ticker = this.props.ticker
    let currentPriceAPI = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubAPI}`;

    console.log("url", currentPriceAPI)
    fetch(currentPriceAPI)
      .then((response) => response.json())
      .then((response) => {
        if (response != null) {
          console.log("response", response)
          this.setState({ stockQuote : response })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchHistoricalData() {
    const apiKey = "BFW1POG1RFAENYS8";
    let stockInfoAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.props.ticker}&outputsize=compact&apikey=${apiKey}`;

    fetch(stockInfoAPI)
      .then((response) => response.json())
      .then((response) => {
        if (response != null) {
          this.setState({ historicalData : response })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async fetchDailyData() {
    const apiKey = "BFW1POG1RFAENYS8";
    let stockInfoAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.ticker}&outputsize=compact&apikey=${apiKey}`;

    await fetch(stockInfoAPI)
      .then((response) => response.json())
      .then((response) => {
        if (response != null) {
          this.setState({ dailyData : response })
        }
      });
  }

  render(){
    console.log("stockquote", this.state.stockQuote)
    console.log("daily", this.state.dailyData)
    console.log("historical", this.state.historicalData)
      return(
          <div className="search-body text-center col-md-12">
          <div>
            <p>{this.props.stockInfo["Symbol"]}: {this.props.stockInfo["Name"]}</p>
            <Card.Header>
              <div>
                <StockGraph name="Stock Ticker (Stock Name)" historicalData={this.state.historicalData}> </StockGraph>
                <StockStats stockInfo={this.props.stockInfo} dailyData={this.state.dailyData} currentPrice={this.state.stockQuote}></StockStats>
                <p className="historicalData">
                  {this.state.historicalData}
                </p>
                <CompanyInfo stockInfo={this.props.stockInfo}> </CompanyInfo>
              </div>
            </Card.Header>
            <News></News>
            <Comps></Comps>
          </div>
        </div>
      );
  }
}
