var express = require('express')
var connection = require('../database/db')
var bodyParser = require("body-parser");
var router = express.Router()

router.use(bodyParser.json());

// Middleware
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.post('/', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    
    connection.connect();
    
    connection.query('SELECT * FROM user WHERE username=?;', [username], function (error, results, fields) {
  if (error) throw error;
  if (results.length == 0) {
      var values = ["", "", username, "", "/api/default-pic"];
      connection.query('INSERT INTO user (fname, lname, username, bio, profile_pic) VALUES (?);', [values], function (error, results, fields) {
          if (error) throw error;
          connection.query('SELECT SUBSTRING(SHA2(RAND(), 512), -32) AS salt;', function (error, salt, fields){
              if (error) throw error;
                var salt = salt[0].salt;
                connection.query(`INSERT INTO security (user_id, password, salt) VALUES ((SELECT user_id FROM user WHERE username="${username}"), SHA2(CONCAT("${password}", "${salt}"), 512),"${salt}");`, function (error, results, fields){
                    if (error) {
                        connection.query(`DELETE FROM user WHERE username="${username}";`, function (error, results, fields){ if (error) throw error; });
                        return res.send('broken');
                    }
                    return res.send('works');
                });
            });
      });
      }
});
    
});
 

module.exports = router