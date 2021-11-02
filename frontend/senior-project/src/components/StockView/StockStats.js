import React from 'react';
import "./StockStats.css";
import { Card, Table } from "react-bootstrap";

export function StockStats(props) {
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
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Open</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Close</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>52 Week High</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>52 Week Low</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>P/E Ratio</td>
                            <td>xx.xx</td>
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