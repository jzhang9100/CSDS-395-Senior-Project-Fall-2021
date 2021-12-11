import React from 'react';
import "./CompanyInfo.css";
import { Card, Table } from "react-bootstrap";

export function CompanyInfo({stockInfo}) {
    return (
        <div className="Info-Area me-auto ms-3">
            <Card>
                <Card.Header className="Company-Info-Header">{stockInfo["Name"]}</Card.Header>
                <Card.Body className='Company-Info-Card-Body'>
                    <div className="Company-Info">
                        <Card.Text>
                            <Table borderless className="Company-Info-Text">
                                <tbody>
                                <tr>
                                <td>{stockInfo["Address"]}</td>
                                </tr>
                                <tr>
                                    <td>{stockInfo["Sector"]} ({stockInfo["Industry"]})</td>
                                </tr>
                                <tr>
                                    <td>{stockInfo["SharesOutstanding"]} Shares Outstanding</td>
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
export default CompanyInfo;