import React, { useState, useEffect } from "react";
import "../styles/Thread.css";
import { useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

export default function Thread({ props, token }) {
  const article_id = useParams()["articleId"];
  const [articleInfo, setArticleInfo] = useState("");
  const [articleComments, setArticleComments] = useState([]);
  const [profileInfo, setProfileInfo] = useState("");
  const [newComment, setNewComment] = useState("");

  async function getArticleInfo() {
    fetch(`http://localhost:3001/articles/get?id=${article_id}`)
      .then((response) => response.json())
      .then((response) => {
        setArticleInfo(response["article_data"][0]);
        console.log(response["article_data"][0]);
      });
  }

  async function getArticleComments() {
    fetch(`http://localhost:3001/posts/get?id=${article_id}`)
      .then((response) => response.json())
      .then((response) => {
        setArticleComments(response["comments"]);
        console.log(response["comments"]);
      });
  }

  async function handleNewComment(event) {
    event.preventDefault();
    console.log(newComment + " " + article_id + " " + profileInfo.user_id);
    fetch(`http://localhost:3001/posts/addComment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "newComment": newComment, "article_id": article_id, "user_id": profileInfo.user_id }),
    }).then(() => {
      console.log("yo");
      window.location.reload();
    });
  }

  async function updateProfile() {
    fetch(`http://localhost:3001/profiles?token=${token}`)
      .then((response) => response.json())
      .then((response) => {
        setProfileInfo(response["user_data"][0]);
      });
  }

  useEffect(() => {
    getArticleInfo();
    getArticleComments();
    updateProfile();
  }, []);

  return (
    <div className="thread-body text-center col-md-12">
      <div>
        <h1>Thread</h1>
        <hr />
        <h3>{articleInfo.name}</h3>
        <a className="button read-article-button mt-3 mb-1 w-50" href={articleInfo.link} type="button" target=" blank">
          Read Article
        </a>
        <hr />
      </div>

      <div className="Thread-Area">
        {articleComments.map((comment) => {
          return (
            <Card className="comment-card border-0 bg-transparent mx-auto my-3" key={comment.comment_id}>
              <Card.Body className="comment-card-body d-flex p-0 m-0">
                <div className="h-100 w-100 my-auto me-auto">
                  <div className="d-flex">
                    <h6 className="ms-3 mt-2 mb-2 me-auto">{comment.username}</h6>
                    <h6 className="me-3 mt-2 mb-2 ms-auto">{convert(Date.parse(comment.create_date))}</h6>
                  </div>
                  <hr className="my-0" />
                  <p className="mt-2">{comment.comment}</p>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <hr />
      <div className="New-Comment-Area">
        <Form onSubmit={(event) => handleNewComment(event)}>
          <Form.Group className="mb-3" controlId="newComment">
            <Form.Label>Create New Comment</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Start Typing Here..."
              rows={3}
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
          </Form.Group>
          <Button id="new-comment-submit" type="submit" className="w-50">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

const convert = (timeStamp) => {
  // Convert timestamp to milliseconds
  var date = new Date(timeStamp);

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
