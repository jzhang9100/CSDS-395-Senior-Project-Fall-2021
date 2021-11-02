import React from "react";
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

export default function Stock() {
    return (     
        <div className="search-body text-center col-md-12">
            <div>
                <StockGraph name="Stock Ticker (Stock Name)">
                </StockGraph>
                <StockStats></StockStats>
                <CompanyInfo></CompanyInfo>
                <News></News>
                <Comps></Comps>
            </div>
        </div> 
    );
}