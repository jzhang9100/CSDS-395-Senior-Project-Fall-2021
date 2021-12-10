import React, { useState, useEffect } from "react";
import "../styles/Thread.css";
import { useParams } from "react-router-dom";

export default function Thread({ props, token }) {
  const article_id = useParams()["articleId"];
  const [articleInfo, setArticleInfo] = useState("");

  async function getArticle() {
    console.log(article_id);
    fetch(`http://localhost:3001/articles/get?id=${article_id}`)
      .then((response) => response.json())
      .then((response) => {
        setArticleInfo(response["article_data"][0]);
        console.log(response["article_data"][0]);
      });
  }

  useEffect(() => {
    getArticle();
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
        <p>Put comments in this area</p>
      </div>
    </div>
  );
}
