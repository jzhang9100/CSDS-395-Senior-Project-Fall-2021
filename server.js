const express = require("express");
var cors = require('cors');

const PORT = 3001;

const app = express();

app.use(cors());

var profiles = require('./endpoints/profiles')
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


