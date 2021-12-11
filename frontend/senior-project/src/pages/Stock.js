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
import "../styles/Stock.css"
import { Card } from "react-bootstrap";

export default class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stockQuote: null,
      historicalData: null,
      dailyData: null,
    };
  }

  componentDidMount() {
    this.fetchStockData();
  }

  fetchStockData() {
    const apiKey1 = "BFW1POG1RFAENYS8";
    let stockInfoAPI1 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.ticker}&outputsize=compact&apikey=${apiKey1}`;

    fetch(stockInfoAPI1)
      .then((response) => response.json())
      .then((data) => this.setState({ dailyData: data }))
      .catch((error) => console.log("the error is", error));

    const apiKey2 = "BFW1POG1RFAENYS8";
    let stockInfoAPI2 = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.props.ticker}&outputsize=compact&apikey=${apiKey2}`;
    fetch(stockInfoAPI2)
      .then((response) => response.json())
      .then((data) => this.setState({ historicalData: data }))
      .catch((error) => console.log("the error is", error));

    const finnhubAPI = "c1se9aqad3i9o8uaclc0";
    let currentPriceAPI = `https://finnhub.io/api/v1/quote?symbol=${this.props.ticker}&token=${finnhubAPI}`;
    fetch(currentPriceAPI)
      .then((response) => response.json())
      .then((data) => this.setState({ stockQuote: data }))
      .catch((error) => console.log("the error is", error));
  }

  render() {
    if (!this.state.stockQuote || !this.state.dailyData || !this.state.historicalData) {
      return <div />;
    } else {
      console.log(this.state);
      return (
        <div className="stock-body text-center col-md-12">
          <div className="w-100">
            <h3 className="display-6">
              {this.props.stockInfo["Symbol"]}: {this.props.stockInfo["Name"]}
            </h3>
            <Card className="stock-container w-100 mx-auto">
              <div className="w-100 mx-auto">
                <StockGraph name="Stock Ticker (Stock Name)" historicalData={this.state.historicalData} className="mx-auto ms-4">
                  {" "}
                </StockGraph>
                <div className="d-flex text-center">
                  <StockStats
                    stockInfo={this.props.stockInfo}
                    stockQuote={this.state.stockQuote}
                    dailyData={this.state.dailyData}
                  ></StockStats>
                  <CompanyInfo stockInfo={this.props.stockInfo}> </CompanyInfo>
                </div>
              </div>
            </Card>
            <News></News>
          </div>
        </div>
      );
    }
  }
}
