const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var profiles = require('./endpoints/profiles')

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use('/profiles', profiles)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

