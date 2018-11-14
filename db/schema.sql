-- In this file, write insert queries to populate the `burgers` table with at least three entries.
-- DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
