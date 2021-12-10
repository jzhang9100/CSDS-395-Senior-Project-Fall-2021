import React from 'react';
import "./News.css";
import { Card, Table } from "react-bootstrap";

export function News(props) {
    return (
        <div className="News-Area">
            <Card className="Result-Box mb-4 border-0">
                <Card.Header as="h5" className="News-Header">Recent News</Card.Header>
                <Card.Body className='News-Card-Body'>
                    <div className="News-Info">
                        <Card.Text>
                            <Table borderless className="Company-Info-Text">
                                <tbody>
                                <tr>
                                    <td>Date Published: Title of Article (News Source) (hyperlinked) </td>
                                </tr>
                                <tr>
                                    <td>Date Published: Title of Article (News Source) (hyperlinked) </td>
                                </tr>
                                <tr>
                                    <td>Date Published: Title of Article (News Source) (hyperlinked) </td>
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
export default News;