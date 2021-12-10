import React from 'react';
import "./Comps.css";
import { Card, Table } from "react-bootstrap";

export function Comps(props) {
    return (
        <div className="Comps-Area">
            <Card className="Result-Box mb-4 border-0">
                <Card.Header as="h5" className="Comps-Header">Comparable Companies</Card.Header>
                <Card.Body className='Comps-Card-Body'>
                    <div className="Comps-Info">
                        <Card.Text>
                            <Table borderless className="Comps-Text">
                                <tbody>
                                <tr>
                                    <td>Ticker: Current Price </td>
                                    <td>Ticker: Current Price </td>
                                </tr>
                                <tr>
                                    <td>Ticker: Current Price </td>
                                    <td>Ticker: Current Price </td>                                </tr>
                                <tr>
                                    <td>Ticker: Current Price </td>
                                    <td>Ticker: Current Price </td>                                 </tr>
                                </tbody>
                            </Table>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Comps;