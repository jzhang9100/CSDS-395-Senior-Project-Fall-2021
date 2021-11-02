import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Stock from './pages/Stock';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function App() {
  const finnhubApiKey = "c1se9aqad3i9o8uaclc0";
  const [newsData, setNewsData] = useState([]); //variable to store newsData

  const getNewsData = async () => {
    await fetch(`https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`)
      .then((Response) => Response.json())
      .then((data) => setNewsData(data));
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <>
      <div className='App'>
        <Router>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/">
                {/*<Signup />*/}
                <Home />
              </Route>

              <Route path="/feed" render={(props) => <Feed {...props} newsData={newsData} setNewsData={setNewsData} />} />

              <Route path='/login'>
                <Login />
              </Route>

              <Route path='/profile'>
                <Profile />
              </Route>

              <Route path='/search'>
                <Search />
              </Route>

              <Route path='/signup'>
                <Signup />
              </Route>

              <Route path='/stock'>
                <Stock />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </>
  );
}
