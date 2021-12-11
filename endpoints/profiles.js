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

// Profile Endpoints
router.get('/', (req, res) => {

    connection.query(`SELECT * FROM user WHERE user_id=(SELECT user_id FROM currently_loggedin WHERE token="${req.query.token}");`, (err,rows) => {
        if(err) throw err;
        console.log('Profile Data for ${uuid}: ');
        console.log(rows);
        connection.query(`Select * from stock where stock_id IN (select stock_id from added_stocks where user_id=(SELECT user_id FROM currently_loggedin WHERE token="${req.query.token}"));`, (err,stocks) => {
            var profileJSON = JSON.stringify({"user_data" : rows, "stock_data" : stocks})
            res.contentType('application/json');
            res.send(profileJSON);
        });
    });
});

/*
 * Expected  input is a JSON to replace whats in the DB
 */
router.put('/', (req, res) => {
    console.log("profiles PUT attempted")
    connection.query(`UPDATE user SET fname="${req.body.fname}", lname="${req.body.lname}", username="${req.body.username}", bio="${req.body.bio}", profile_pic="${req.body.profile_pic}" WHERE user_id=(SELECT user_id FROM currently_loggedin WHERE token="${req.body.token}");`, (err,rows) => {
        if(err) throw err;
        res.sendStatus(200);
    });
});


router.post('/', (req, res) => {
    var values = [req.body.fname, req.body.lname, req.body.username, req.body.bio, req.body.profile_pic]
    connection.query('INSERT INTO user (fname, lname, username, bio, profile_pic) VALUES ?;', [[values]], (err,rows) => {
        if(err) throw err;
        res.sendStatus(200);
    });
});

router.post('/addStock', (req, res) => {
    console.log("adding stock...");
    connection.query(`SELECT stock_id FROM stock WHERE ticker="${req.body.stock_ticker}"`, (err,rows) => {
        if(err) throw err;
        var values = [req.body.user_id, rows[0]["stock_id"]];
        connection.query(`INSERT INTO added_stocks (user_id, stock_id) VALUES ?;`, [[values]], (err,rows) => {
            if(err) throw err;
            return res.sendStatus(200);
        });
    });
});

router.post('/removeStock', (req, res) => {
    console.log("removing stock...");
    connection.query(`SELECT stock_id FROM stock WHERE ticker="${req.body.stock_ticker}"`, (err,rows) => {
        if(err) throw err;
        var values = [req.body.user_id, rows[0]["stock_id"]];
        console.log(values);
        var sql = `DELETE FROM added_stocks WHERE user_id="${values[0]}" AND stock_id="${values[1]}"`;
        console.log(sql);
        connection.query(`DELETE FROM added_stocks WHERE user_id="${values[0]}" AND stock_id="${values[1]}"`, [[values]], (err,rows) => {
            if(err) throw err;
            console.log(values);
            return res.sendStatus(200);
        });
    });
});

router.delete('/:uuid', (req, res) => {
});

module.exports = router
