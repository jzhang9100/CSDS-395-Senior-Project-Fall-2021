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
    
    connection.query('SELECT user_id FROM user WHERE username=?;', [username], function (error, results, fields) {
        
        if (results.length == 1) {
        
            var user_id = results[0].user_id;
            connection.query('SELECT * FROM security WHERE user_id=?', [user_id], function (error, results, fields) {
                var salt = results[0].salt;
                var pass_hash = results[0].password;
                
                connection.query(`SELECT SHA2(CONCAT("${req.body.password}", "${salt}"), 512) AS pass`, function(error, results, fields) {
                    
                    if(pass_hash === results[0].pass){
                        
                        connection.query('SELECT SHA2(RAND(), 512) AS token;', function(error, results, fields) {
                            var token = results[0].token;
                            connection.query('INSERT INTO currently_loggedin (user_id, token) VALUES (?);', [[user_id, token]], function (error, results, fields) {
                                return res.send(JSON.stringify({"token":token}));
                            });
                        });
                    } else {
                        return res.sendStatus(401);
                    }
                });
            });
        
        }
        
        
    });
    
});
 

module.exports = router