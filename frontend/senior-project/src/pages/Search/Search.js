import React from "react";
import "./Search.css";
import { Card, Table } from "react-bootstrap";

export default function Search() {
  return (
    <div className="search-body text-center col-md-12">
      <div className="Search-Bar mx-auto w-50">
        <h1>Search Stock</h1>
        <input type="text" placeholder="Enter Stock Symbol..." />
        <button className="search-button ms-4">Search</button>
      </div>

      <div className="Results-Area">
        <Card className="Result-Box mx-auto w-50">
          <Card.Header>Stock Symbol</Card.Header>
          <Card.Body>
            <div className="Stock-Info">
              <Card.Text>
                <Table borderless>
                  <thead>
                    <tr>
                      <th>Result 1</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Company Name</td>
                      <td>Generic Name</td>
                    </tr>
                    <tr>
                      <td>Current Stock Price</td>
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
                  </tbody>
                </Table>
              </Card.Text>
            </div>
            <button className="view-stock-button">View Stock</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
