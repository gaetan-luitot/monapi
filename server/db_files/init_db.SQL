-- -----------------------------------------------------------------------------
-- BDD-monapi
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
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

-- Category :
CREATE TABLE category
(
    category_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_category_user FOREIGN KEY (user_id) REFERENCES user (user_id)
);

-- Operator :
CREATE TABLE operator
(
    operator_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    category_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_operator_category FOREIGN KEY (category_id) REFERENCES category (category_id),
    CONSTRAINT FK_operator_user FOREIGN KEY (user_id) REFERENCES user (user_id)
);

-- Account :
CREATE TABLE account
(
    account_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    operator_id BIGINT UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_account_operator FOREIGN KEY (operator_id) REFERENCES operator (operator_id),
    CONSTRAINT FK_account_user FOREIGN KEY (user_id) REFERENCES user (user_id)
);

-- Mean :
CREATE TABLE mean
(
    mean_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_mean_user FOREIGN KEY (user_id) REFERENCES user (user_id)
);

-- Flow :
CREATE TABLE flow
(
    flow_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    what VARCHAR(200) NOT NULL,
    operator_in BIGINT NOT NULL,
    operator_out BIGINT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    mean_id BIGINT NOT NULL,
    flow_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_flow_operator_in FOREIGN KEY (operator_in) REFERENCES operator (operator_id),
    CONSTRAINT FK_flow_operator_out FOREIGN KEY (operator_out) REFERENCES operator (operator_id),
    CONSTRAINT FK_flow_mean FOREIGN KEY (mean_id) REFERENCES mean (mean_id),
    CONSTRAINT FK_flow_user FOREIGN KEY (user_id) REFERENCES user (user_id)
);
