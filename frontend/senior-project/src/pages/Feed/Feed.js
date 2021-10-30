import React, { useEffect } from "react";
import "./Feed.css";
import { Card } from "react-bootstrap";

export default function Feed({ newsData, setNewsData }) {
  const finnhubApiKey = "c1se9aqad3i9o8uaclc0";

  const getNewsData = async () => {
    await fetch(`https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`)
      .then((Response) => Response.json())
      .then((data) => setNewsData(data));
  };

  useEffect(() => {
    getNewsData();
  }, []);

  // components of elements in newsData include:
  //.category .datetime .headline .id .image .related .source .summary .url
  const article1 = newsData[0];
  const article1Time = convert(article1.datetime);

  return (
    <div className="feed-body text-center col-md-12">
      <div className="Feed-Area">
        <h1>News Feed</h1>
        {/* Articles */}
        <div>
          <Card className="Feed-Box mt-3 mx-auto w-50">
            <Card.Header className="d-flex">
              <p className="me-auto">Stock Symbol {article1Time} shared by [Username]</p>
              <button className="share-button">Share</button>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <h4>{article1.headline}</h4>
                <p>{article1.summary}</p>
              </Card.Text>
              <img className="article-img" src={article1.image} alt="Article 1 Photograph" />
              <a className="button continue-reading-button mt-3" href={article1.url} type="button" target=" blank">
                Continue Reading
              </a>
            </Card.Body>
          </Card>
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
