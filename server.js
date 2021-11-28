const express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());

var profiles = require('./endpoints/profiles')
var register = require('./endpoints/register')

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/register", register);


app.use('/profiles', profiles)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


