var express = require('express')
var connection = require('../database/db')
var router = express.Router()

// Middleware
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// Articles Endpoints
router.get('/:ticker', (req, res) => {
    var uuid = req.param('ticker')
    connection.query('SELECT * FROM article_stocks WHERE stock_id=${uuid};', (err,rows) => {
        if(err) throw err;
        console.log('Articles for ${uuid}: ');
        console.log(rows);

        var ret = [];
        Object.keys(rows).forEach(function(key)) {
            var row = rows[key];
            console.log(row.article_id)
            connection.query('SELECT * FROM article WHERE article_id=${row.article_id}', (err2, rows2)) => {
                if(err) throw err;
                Object.keys(rows2).forEach(function(key2) {
                    ret.push(rows2[key2].link)
                }
            }
        });
        var articlesJSON = {...ret}
        res.contentType('application/json');
        res.send(articlesJSON);
    });
});

module.exports = router
