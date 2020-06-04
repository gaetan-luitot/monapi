-- -----------------------------------------------------------------------------
-- BDD-monapi
-- -----------------------------------------------------------------------------

CREATE DATABASE monapibdd;

CREATE USER 'monapi_user'@'localhost' IDENTIFIED BY 'fd6ed2f62ded1c334a383aab63d243e36fe46dccef1c1f26a3775cd16854e159';

GRANT ALL PRIVILEGES ON monapibdd.* TO 'monapi_user'@'localhost';

FLUSH PRIVILEGES;


-- TO DO :
-- -

-- -----------------------------------------------------------------------------
-- Création des tables :
-- -----------------------------------------------------------------------------

-- Category :
CREATE TABLE category
(
    category_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Operator :
CREATE TABLE operator
(
    operator_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    category_id BIGINT,
    -- CONSTRAINT
    CONSTRAINT FK_operator_category FOREIGN KEY (category_id) REFERENCES category (category_id)
);

-- Account :
CREATE TABLE account
(
    account_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    operator_id BIGINT UNIQUE,
    name VARCHAR(50) NOT NULL UNIQUE,
    -- CONSTRAINT
    CONSTRAINT FK_account_operator FOREIGN KEY (operator_id) REFERENCES operator (operator_id)
);

-- Mean :
CREATE TABLE mean
(
    mean_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
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
    -- CONSTRAINT
    CONSTRAINT FK_flow_operator_in FOREIGN KEY (operator_in) REFERENCES operator (operator_id),
    CONSTRAINT FK_flow_operator_out FOREIGN KEY (operator_out) REFERENCES operator (operator_id),
    CONSTRAINT FK_flow_mean FOREIGN KEY (mean_id) REFERENCES mean (mean_id)
);
