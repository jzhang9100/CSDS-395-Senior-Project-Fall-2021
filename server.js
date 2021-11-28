const express = require("express");
var cors = require('cors');

const PORT = 3001;

const app = express();

app.use(cors());

var profiles = require('./endpoints/profiles')
var register = require('./endpoints/register')

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/register", register);


app.use('/profiles', profiles)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


