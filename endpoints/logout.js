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
    
    var token = req.cookie.token;
    
    connection.connect();
    
    connection.query('DELETE FROM currently_loggedin WHERE token=?;', [[token]],function (error, results, fields) {
        if (error) return res.sendStatus(500);
        return res.sendStatus(200);
    });
 
    });
 

module.exports = router