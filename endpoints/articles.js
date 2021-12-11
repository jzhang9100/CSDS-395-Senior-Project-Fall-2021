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

//Grabs an article
router.get('/get', (req, res) => {
    var article_id = req.query.id;
    console.log(article_id);
    connection.query(`SELECT * FROM article WHERE article_id=${article_id}`, (err, rows) => {
        if(err) throw err;
        console.log(rows);
        var articleJSON = JSON.stringify({"article_data" : rows});
        console.log(articleJSON);
        res.contentType('application/json');
        res.send(articleJSON);
    });
});

// Articles Endpoints
router.get('/:ticker', (req, res) => {
    var uuid = req.param('ticker')
    connection.query('SELECT * FROM article_stocks WHERE stock_id=${uuid};', (err,rows) => {
        if(err) throw err;
        console.log('Articles for ${uuid}: ');
        console.log(rows);

        var ret = [];
        Object.keys(rows).forEach(function(key) {
            var row = rows[key];
            console.log(row.article_id);
            connection.query('SELECT * FROM article WHERE article_id=${row.article_id}', (err2, rows2) => {
                if(err) throw err;
                Object.keys(rows2).forEach(function(key2) {
                    ret.push(rows2[key2].link)
                });
            });
        });
        var articlesJSON = {...ret}
        res.contentType('application/json');
        res.send(articlesJSON);
    });
});

//Adds an article to the local database if it does not already exist in the database
router.post('/add', (req, res) => {
    var values = [req.query.article_id, req.query.name, req.query.link];
    connection.query(`SELECT article_id FROM article WHERE article_id=${req.query.article_id}`, (err, rows) => {
        if(err) throw err;
        if(rows[0] == null) {
            connection.query(`INSERT INTO article (article_id, name, link) VALUES ?;`, [[values]], (err,rows) => {
                if(err) throw err;
                return res.sendStatus(200);
            });
        }
        return res.sendStatus(200);
    });
});

module.exports = router
