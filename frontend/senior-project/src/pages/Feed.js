import React from "react";
import "../styles/Feed.css";
import { Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Feed({ newsData }) {
  // components of elements in newsData include:
  //.category .datetime .headline .id .image .related .source .summary .url

  return (
    <div className="feed-body text-center col-md-12">
      <div className="Feed-Area">
        <h1>News Feed</h1>
        {/* Articles */}
        <div id="articles-area">
          {newsData.map((article) => {
            var url = "/thread/" + article.id;
            return (
              <Card className="Feed-Box mt-3 mx-auto w-50" key={article.id}>
                <Card.Header className="d-flex">
                  <div className="me-auto">
                    <p>{convert(article.datetime)}</p>
                  </div>
                  <button className="share-button">Share</button>
                </Card.Header>
                <Card.Body>
                  <div>
                    <h4>{article.headline}</h4>
                    <p>{article.summary}</p>
                  </div>
                  <img className="article-img" src={article.image} alt="Article Photograph" />
                  <div className="d-flex">
                    <a className="button continue-reading-button mt-3 mb-1 w-50" href={article.url} type="button" target=" blank">
                      Continue Reading
                    </a>
                    <LinkContainer to={url} className="w-50">
                      <Nav.Link>
                        <a className="button continue-reading-button mt-1 mb-1" href="#" type="button" target=" blank">
                          View Thread
                        </a>
                      </Nav.Link>
                    </LinkContainer>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const convert = (timeStamp) => {
  // Convert timestamp to milliseconds
  var date = new Date(timeStamp * 1000);

  // Year
  var year = date.getFullYear();

  // Month
  var month = date.getMonth() + 1;

  // Day
  var day = date.getDate();

  // Hours
  var hours = date.getHours();

  // Minutes
  var minutes = "0" + date.getMinutes();

  // Display date time in xM/xd/yyyy xh:mm:am/pm format
  var convdataTime;
  if (hours > 12) {
    hours -= 12;
    convdataTime = month + "/" + day + "/" + year + " " + hours + ":" + minutes.substr(-2) + "pm";
  } else if (hours === 12) {
    convdataTime = month + "/" + day + "/" + year + " " + hours + ":" + minutes.substr(-2) + "pm";
  } else if (hours === 0) {
    hours += 12;
    convdataTime = month + "/" + day + "/" + year + " " + hours + ":" + minutes.substr(-2) + "am";
  } else {
    convdataTime = month + "/" + day + "/" + year + " " + hours + ":" + minutes.substr(-2) + "am";
  }
  return convdataTime;
};
