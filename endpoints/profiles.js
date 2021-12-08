var express = require('express')
var connection = require('../database/db')
var router = express.Router()

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

        var profileJSON = JSON.stringify(rows)
        res.contentType('application/json');
        res.send(profileJSON);
    });
});

/*
 * Expected  input is a JSON to replace whats in the DB
 */
router.put('/', (req, res) => {
    connection.query(`UPDATE user SET fname="${req.body.fname}", lname="${req.body.lname}", username="${req.body.username}", bio="${req.body.bio}", profile_pic="${req.body.profile_pic}" WHERE user_id=(SELECT user_id FROM currently_loggedin WHERE token="${req.query.token}");`, (err,rows) => {
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

router.delete('/:uuid', (req, res) => {
});

module.exports = router
