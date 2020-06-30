-- ---------------------------------------------------------------------------------------------
-- Create BDD
-- ---------------------------------------------------------------------------------------------

CREATE DATABASE forandrabdd;

CREATE USER 'forandra_user'@'localhost' IDENTIFIED BY '550937c2b72fbc41c957d95c000d8ad0d1a51c73c59c393bf24410f6a3b3557a';

GRANT ALL PRIVILEGES ON forandrabdd.* TO 'forandra_user'@'localhost';

FLUSH PRIVILEGES;