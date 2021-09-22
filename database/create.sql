CREATE DATABASE IF NOT EXISTS streads;
use streads;

CREATE TABLE IF NOT EXISTS user (
	user_id INT NOT NULL AUTO_INCREMENT,
	fname varchar(255) NOT NULL,
	lname varchar(255) NOT NULL,
	username varchar(255) NOT NULL,
	bio text NOT NULL,
	create_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	profile_pic text NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS security (
	user_id INT NOT NULL,
	password text NOT NULL,
	salt varchar(32) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE IF NOT EXISTS article (
	article_id INT NOT NULL AUTO_INCREMENT,
	name text NOT NULL,
	link text NOT NULL,
	PRIMARY KEY (article_id)
);

CREATE TABLE IF NOT EXISTS post (
	post_id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	article_id INT NOT NULL,
	likes INT default 0,
	create_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (post_id),
	FOREIGN KEY (user_id) REFERENCES user(user_id),
	FOREIGN KEY (article_id) REFERENCES article(article_id)
);

CREATE TABLE IF NOT EXISTS likes (
	post_id INT NOT NULL,
	user_id INT NOT NULL,
	create_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
	FOREIGN KEY (post_id) REFERENCES post(post_id)
);

CREATE TABLE IF NOT EXISTS stock (
	stock_id INT NOT NULL AUTO_INCREMENT,
	name text NOT NULL,
	ticker varchar(5),
	exchange ENUM('NYSE','NASDAQ','SSE','JPX','HKEX','SZSE','LSE','TSX','NSE_INDIA','FSX'),
	PRIMARY KEY (stock_id)
);

CREATE TABLE IF NOT EXISTS comments (
	comment_id INT NOT NULL AUTO_INCREMENT,
	post_id INT NOT NULL,
	user_id INT NOT NULL,
	comment text NOT NULL,
	create_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (comment_id),
	FOREIGN KEY (user_id) REFERENCES user(user_id),
	FOREIGN KEY (post_id) REFERENCES post(post_id)
);

CREATE TABLE IF NOT EXISTS follower (
	user_id INT NOT NULL,
	follwed_user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
	INDEX (follwed_user_id)
);

CREATE TABLE IF NOT EXISTS added_stocks (
	user_id INT NOT NULL,
	stock_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
	FOREIGN KEY (stock_id) REFERENCES stock(stock_id)
);

CREATE TABLE IF NOT EXISTS article_stocks (
	article_id INT NOT NULL,
	stock_id INT NOT NULL,
	FOREIGN KEY (article_id) REFERENCES article(article_id),
	FOREIGN KEY (stock_id) REFERENCES stock(stock_id)
);