const express = require("express");
var cors = require('cors');
let cookieParser = require('cookie-parser');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(cookieParser())

var profiles = require('./endpoints/profiles')
var articles = require('./endpoints/articles')
var register = require('./endpoints/register')
var login = require('./endpoints/login')
var logout = require('./endpoints/logout')
var loginToken = require('./endpoints/loginToken')

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use('/register', register)
app.use('/login', login)
app.use('/logout', logout)
app.use('/loginToken', loginToken)
app.use('/profiles', profiles)
app.use('/articles', articles)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


