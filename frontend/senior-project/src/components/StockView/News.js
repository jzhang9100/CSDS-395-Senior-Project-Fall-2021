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
                                    <a href="https://www.foxnews.com/auto/electric-ford-mustang-mach-e-gets-a-big-price-hike">The electric Ford Mustang Mach-E just got a big price hike</a>
                                </tr>
                                <tr>
                                    <a href="https://www.cnbc.com/2021/12/10/cramers-lightning-round-stick-with-ford-over-lightning-emotors.html">Cramer’s lightning round: Stick with Ford over Lightning eMotors</a>
                                </tr>
                                <tr>
                                    <a href="https://finance.yahoo.com/video/chip-shortage-disrupts-gm-ford-135100348.html">Chip shortage disrupts GM and Ford production</a>
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