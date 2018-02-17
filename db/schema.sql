-- Created the DB "wizard_schools_db" (only works on local connections)
DROP DATABASE IF EXISTS burger_time_db;
CREATE DATABASE burger_time_db;
USE burger_time_db;

-- Created the table "schools" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY(id)
);
