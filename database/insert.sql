use streads;

#User
INSERT INTO user (fname, lname, username, bio, profile_pic) VALUES ('test_lname1', 'test_fname1', 'test_user1', 'test user bio 1', '/default-pic');
INSERT INTO user (fname, lname, username, bio, profile_pic) VALUES ('test_lname2', 'test_fname2', 'test_user2', 'test user bio 2', '/default-pic');
INSERT INTO user (fname, lname, username, bio, profile_pic) VALUES ('test_lname3', 'test_fname3', 'test_user3', 'test user bio 3', '/default-pic');

#Security
#password for test_user1 is password1
#password for test_user2 is password2
#password for test_user3 is password3
#generating salt with SUBSTRING(SHA2(RAND(), 512), -32) for 32 byte salt then appending to password

set @salt = SUBSTRING(SHA2(RAND(), 512), -32);
INSERT INTO security (user_id, password, salt) VALUES ((SELECT user_id FROM user WHERE username = 'test_user1'), SHA2(CONCAT('password1', @salt), 512),@salt);
set @salt = SUBSTRING(SHA2(RAND(), 512), -32);
INSERT INTO security (user_id, password, salt) VALUES ((SELECT user_id FROM user WHERE username = 'test_user2'), SHA2(CONCAT('password2', @salt), 512),@salt);
set @salt = SUBSTRING(SHA2(RAND(), 512), -32);
INSERT INTO security (user_id, password, salt) VALUES ((SELECT user_id FROM user WHERE username = 'test_user3'), SHA2(CONCAT('password3', @salt), 512),@salt); 

#Article
INSERT INTO article (name, link) VALUES ('Facebook chief technology officer to step down, Zuckerberg appoints hardware boss as replacement','https://www.cnbc.com/2021/09/22/facebook-chief-technology-officer-to-step-down.html');
INSERT INTO article (name, link) VALUES ('Discord CEO on social audio app’s next big spends after recent $500 million funding','https://www.cnbc.com/2021/09/22/discord-doubles-valuation-to-15-billion-in-new-funding-round.html');

#Stock
INSERT INTO stock (name, ticker, exchange) VALUES ('Facebook','FB','NASDAQ');
INSERT INTO stock (name, ticker, exchange) VALUES ('Ford','FORD','NASDAQ');

#Comments
INSERT INTO comments (article_id, user_id, comment) VALUES ((SELECT article_id from article WHERE name = 'Facebook chief technology officer to step down, Zuckerberg appoints hardware boss as replacement'),(SELECT user_id FROM user WHERE username = 'test_user2'),'test comment 1 from user 2');
INSERT INTO comments (article_id, user_id, comment) VALUES ((SELECT article_id from article WHERE name = 'Facebook chief technology officer to step down, Zuckerberg appoints hardware boss as replacement'),(SELECT user_id FROM user WHERE username = 'test_user3'),'test comment 2 from user 3');

#Follower
INSERT INTO follower (user_id, followed_user_id) VALUES ((SELECT user_id FROM user WHERE username = 'test_user1'),(SELECT user_id FROM user WHERE username = 'test_user2'));
INSERT INTO follower (user_id, followed_user_id) VALUES ((SELECT user_id FROM user WHERE username = 'test_user2'),(SELECT user_id FROM user WHERE username = 'test_user1'));
INSERT INTO follower (user_id, followed_user_id) VALUES ((SELECT user_id FROM user WHERE username = 'test_user1'),(SELECT user_id FROM user WHERE username = 'test_user3'));
INSERT INTO follower (user_id, followed_user_id) VALUES ((SELECT user_id FROM user WHERE username = 'test_user3'),(SELECT user_id FROM user WHERE username = 'test_user2'));

#Added Stocks
INSERT INTO added_stocks (user_id, stock_id) VALUES ((SELECT user_id FROM user WHERE username = 'test_user1'), (SELECT stock_id FROM stock WHERE ticker = 'FB'));
INSERT INTO added_stocks (user_id, stock_id) VALUES ((SELECT user_id FROM user WHERE username = 'test_user1'), (SELECT stock_id FROM stock WHERE ticker = 'FORD'));
INSERT INTO added_stocks (user_id, stock_id) VALUES ((SELECT user_id FROM user WHERE username = 'test_user2'), (SELECT stock_id FROM stock WHERE ticker = 'FB'));

#Article Stocks
INSERT INTO article_stocks (article_id, stock_id) VALUES ((SELECT article_id from article WHERE name = 'Facebook chief technology officer to step down, Zuckerberg appoints hardware boss as replacement'),(SELECT stock_id FROM stock WHERE ticker = 'FB'));