import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Stock from "./pages/Stock";
import EditProfile from "./pages/EditProfile";
import Thread from "./pages/Thread";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
var stockInfo;
var ticker;
var HistoricalInfo;
var DailyInfo;

function setToken(token) {
  var date = new Date();
  date = new Date(date.setDate(date.getDate() + 1)).toUTCString();
  document.cookie = `token=${token}; expires=${date};`;
}

function getToken() {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("token=")) {
      return cookies[i].substring(6);
    }
  }

  return null;
}

export default function App() {
  const finnhubApiKey = "c1se9aqad3i9o8uaclc0";
  const [newsData, setNewsData] = useState([]); //variable to store newsData

  const getNewsData = async () => {
    await fetch(`https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`)
      .then((Response) => Response.json())
      .then((data) => {
        setNewsData(data);
        data.forEach((article) => {
          fetch(`http://localhost:3001/articles/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ article_id: article.id, name: article.headline, link: article.url }),
          });
        });
      });
    console.log("fetched news data.");
  };

  const token = getToken();

  useEffect(() => {
    getNewsData();
  }, []);

  let defaultPage = <Home />;

  if (!token) {
    console.log(token);
    defaultPage = <Login setToken={setToken} />;
  }

  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/">
                {defaultPage}
              </Route>

              <Route path="/feed" render={(props) => <Feed {...props} newsData={newsData} setNewsData={setNewsData} />} />

              <Route path="/login">
                <Login setToken={setToken} />
              </Route>

              <Route path="/profile">
                <Profile token={getToken()} />
              </Route>

              <Route path="/search">
                <Search token={getToken()} />
              </Route>

              <Route path="/signup">
                <Signup />
              </Route>

              <Route path="/stock" render={(props) => <Stock {...props} stockInfo={stockInfo} />} />

              <Route path="/thread/:articleId">
                <Thread token={getToken()} />
              </Route>

              <Route path="/editprofile">
                <EditProfile token = {getToken()} />
              </Route>
              
            </Switch>
          </Container>
        </Router>
      </div>
    </>
  );
  //  }
}

export function updateStockInfo(info) {
  stockInfo = info;
}

export function updateTicker(info) {
  ticker = info;
}

export function updateHistoricalInfo(info) {
  HistoricalInfo = info;
}

export function updateDailyInfo(info) {
  DailyInfo = info;
}