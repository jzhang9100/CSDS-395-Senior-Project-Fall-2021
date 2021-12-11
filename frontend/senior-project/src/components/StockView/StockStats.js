import React from 'react';
import "./StockStats.css";
import { Card, Table } from "react-bootstrap";

export function StockStats({stockInfo, stockQuote, dailyData, currentPrice}) {
    return (
        <div className="Stats-Area">
            <Card className="Result-Box mx-auto w-50">
            <Card.Header className="Stock-Stats-Header">Price and Estimates</Card.Header>
            <Card.Body className='Stock-Stats-Card-Body'>
            <div className="Stock-Stats">
                <Card.Text className="Stock-Stats-Text">
                    <Table borderless className="Stock-Stats-Table">
                        <tbody text="white">
                        <tr> 
                            <td>Current Price</td>
                            <td>${currentPrice}</td>
                            
                        </tr>
                        <tr>
                            <td>Open</td>
                            <td>${dailyData['Time Series (Daily)']['2021-12-10']['1. open']}</td>
                        </tr>
                        <tr>
                            <td>Close</td>
                            <td>${dailyData['Time Series (Daily)']['2021-12-10']['4. close']}</td>
                        </tr>
                        <tr>
                            <td>52 Week High</td>
                            <td>${stockInfo["52WeekHigh"]}</td>
                        </tr>
                        <tr>
                            <td>52 Week Low</td>
                            <td>${stockInfo["52WeekLow"]}</td>
                        </tr>
                        <tr>
                            <td>P/E Ratio</td>
                            <td>{stockInfo["PERatio"]}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Text>
            </div>
            </Card.Body>
            </Card>
        </div>
    );
}
export default StockStats;