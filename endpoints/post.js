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
    
    var offset = req.body.offset;
    var send = [];
    
    connection.connect();
    
    connection.query(`SELECT * FROM post LIMIT ${offset}, 1;`, function (err, posts) {
        
        if (err) console.log(err);
        for( var i = 0; i < posts.length; i++){
            
            var article_id = posts[i].article_id;
            var post_id = posts[i].post_id;
            var user_id = posts[i].user_id;
            var likes = posts[i].likes;
            var create_date = posts[i].create_date;
            
            console.log(posts)
            
            send.push(new Promise((resolve, reject) => {
                connection.query(`SELECT * FROM article WHERE article_id=${article_id};`, function (err, article){
                if (err) reject(err);
                    connection.query(`SELECT comment_id, user_id, comment, create_date FROM comments WHERE post_id=${post_id};`, function (err, comments){
                    if (err) reject(err);
                        connection.query(`SELECT username, user_id FROM user WHERE user_id=${user_id};`, function (err, user){
                            if (err) reject(err);
                            resolve({"post_id": post_id, "user": user[0], "article": article[0], "comments": comments, "likes": likes, "create_date": create_date});
                        });
                    });
                });
            }));
        }
        var ret = Promise.all(send).then(response => res.send(JSON.stringify(response)));
    });
    
});
 

module.exports = router