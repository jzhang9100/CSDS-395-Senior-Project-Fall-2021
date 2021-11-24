import React from 'react';
import "./CompanyInfo.css";
import { Card, Table } from "react-bootstrap";

export function CompanyInfo(props) {
    return (
        <div className="Info-Area">
            <Card className="Result-Box mx-auto w-50">
                <Card.Header className="Company-Info-Header">Company Name</Card.Header>
                <Card.Body className='Company-Info-Card-Body'>
                    <div className="Company-Info">
                        <Card.Text>
                            <Table borderless className="Company-Info-Text">
                                <tbody>
                                <tr>
                                    <td>Current Headquarters</td>
                                </tr>
                                <tr>
                                    <td>Company Industry</td>
                                </tr>
                                <tr>
                                    <td>Shares Outstanding</td>
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