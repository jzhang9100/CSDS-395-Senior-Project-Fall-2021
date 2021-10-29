import React from "react";
import "../styles/Feed.css";
import { Card } from "react-bootstrap";

export default function Feed() {
  return (
    <div className="feed-body text-center col-md-12">
      <div className="Feed-Area">
        <h1>News Feed</h1>
        <Card className="Feed-Box mt-3 mx-auto w-50">
          <Card.Header className="d-flex">
            <p className="me-auto">Stock Symbol [Date] shared by [Username]</p>
            <button className="share-button">Share</button>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                Preview of article Preview of article Preview of article Preview of article Preview of Preview of article Preview
                of article Preview of article Preview of article Preview of Preview of article Preview of article Preview of
                article Preview of article Preview of Preview of article Preview of article Preview of article Preview of article
                Preview of Preview of article Preview of article Preview of article Preview of article Preview of Preview of
                article Preview of article Preview of article Preview of article Preview of Preview of article Preview of article
                Preview of article Preview of article Preview of Preview of article Preview of article Preview of article Preview
                of article Preview of Preview of article Preview of article Preview of article Preview of article Preview of
                Preview of article Preview of article Preview of article Preview of article Preview of{" "}
              </p>
            </Card.Text>
            <button className="continue-reading-button">Continue Reading</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
