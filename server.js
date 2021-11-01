
const express = require("express");
var cors = require('cors');
var mysql = require('mysql');
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api/resopnse", (req, res) => {
    
var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});
 
connection.connect();
 
connection.query('SELECT * FROM user WHERE username="' + req.body.username + '";', function (error, results, fields) {
  if (error) throw error;
  if (results.length == 0) {
      connection.query('INSERT INTO user (fname, lname, username, bio, profile_pic) VALUES ("", "", "' + req.body.username + '", "", "/api/default-pic");', function (error, results, fields) {
          if (error) throw error;
            connection.query('SUBSTRING(SHA2(RAND(), 512), -32) AS salt;', function (error, salt, fields){
              if (error) throw error;
                connection.query('INSERT INTO security (user_id, password, salt) VALUES ((SELECT user_id FROM user WHERE username="' + req.body.username + '"), SHA2(CONCAT("' + req.body.password + '", "' + salt[0].salt + '"), 512),"' + salt[0].salt + '");', function (error, results, fields){
                    if (error) {
                        connection.query('DELETE FROM user WHERE username="' + req.body.username + '";', function (error, results, fields){ if (error) throw error; });
                    }
                });
            });
      });
      }
});
 
connection.end();
    
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})