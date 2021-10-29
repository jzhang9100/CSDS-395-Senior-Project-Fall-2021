import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Stock from "./pages/Stock";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          {/*<Login />*/}
          <Container>
            <Switch>
              <Route exact path="/">
                <Signup />
                <Home />
              </Route>

              <Route path="/feed">
                <Feed />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>

              <Route path="/search">
                <Search />
              </Route>

              <Route path="/signup">
                <Signup />
              </Route>

              <Route path="/stock">
                <Stock />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </>
  );
}
