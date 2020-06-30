-- -----------------------------------------------------------------------------
-- BDD-forandra
-- -----------------------------------------------------------------------------

CREATE DATABASE forandrabdd;

CREATE USER 'forandra_user'@'localhost' IDENTIFIED BY '550937c2b72fbc41c957d95c000d8ad0d1a51c73c59c393bf24410f6a3b3557a';

GRANT ALL PRIVILEGES ON forandrabdd.* TO 'forandra_user'@'localhost';

FLUSH PRIVILEGES;


-- TO DO :
-- -

-- -----------------------------------------------------------------------------
-- Création des tables :
-- -----------------------------------------------------------------------------

-- User :
CREATE TABLE user
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

INSERT INTO user VALUES(DEFAULT, 'default', 'user');

-- Operator :
CREATE TABLE operator
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    -- category_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    -- CONSTRAINT FK_operator_category FOREIGN KEY (category_id) REFERENCES category (id),
    CONSTRAINT FK_operator_user FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Account :
CREATE TABLE account
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    operator_id BIGINT UNIQUE NOT NULL,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_account_operator FOREIGN KEY (operator_id) REFERENCES operator (id),
    CONSTRAINT FK_account_user FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Mean :
CREATE TABLE mean
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_mean_user FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Category :
CREATE TABLE category
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_category_user FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Flow :
CREATE TABLE flow
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    what VARCHAR(200) NOT NULL,
    the BIGINT NOT NULL,
    operator_in BIGINT NOT NULL,
    operator_out BIGINT NOT NULL,
    category_id BIGINT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    mean_id BIGINT NOT NULL,
    flow_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_flow_category FOREIGN KEY (category_id) REFERENCES category (id),
    CONSTRAINT FK_flow_operator_in FOREIGN KEY (operator_in) REFERENCES operator (id),
    CONSTRAINT FK_flow_operator_out FOREIGN KEY (operator_out) REFERENCES operator (id),
    CONSTRAINT FK_flow_mean FOREIGN KEY (mean_id) REFERENCES mean (id),
    CONSTRAINT FK_flow_user FOREIGN KEY (user_id) REFERENCES user (id)
);
