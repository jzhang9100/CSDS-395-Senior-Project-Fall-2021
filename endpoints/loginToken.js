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
    var token = req.body.token;
    token = token.replace('"', '');
    token = token.replace('"', '');
    
    connection.connect();
    
    connection.query('SELECT * FROM currently_loggedin WHERE create_time >= now() - INTERVAL 1 DAY AND token=?;', [token], function (error, results, fields) {
        
        console.log(results)
        
        if(results.length == 1){
            connection.query('UPDATE currently_loggedin SET create_time=CURRENT_TIMESTAMP WHERE token=?', [token], function (error, results, fields) {
                return res.send(JSON.stringify({"token":token}));
            });
        } else {
            return res.sendStatus(401);
        }
        
    });
    
});
 

module.exports = router