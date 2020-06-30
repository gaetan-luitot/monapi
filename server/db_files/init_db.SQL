-- -----------------------------------------------------------------------------
-- BDD-forandra
-- -----------------------------------------------------------------------------

-- TO DO :
-- -

-- -----------------------------------------------------------------------------
-- Création des tables :
-- -----------------------------------------------------------------------------

-- User :
CREATE TABLE IF NOT EXISTS user
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

INSERT INTO user VALUES(DEFAULT, 'default', 'user');

-- Operator :
CREATE TABLE IF NOT EXISTS operator
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
CREATE TABLE IF NOT EXISTS account
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    operator_id BIGINT UNIQUE NOT NULL,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_account_operator FOREIGN KEY (operator_id) REFERENCES operator (id),
    CONSTRAINT FK_account_user FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Mean :
CREATE TABLE IF NOT EXISTS mean
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_mean_user FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Category :
CREATE TABLE IF NOT EXISTS category
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    -- CONSTRAINT
    CONSTRAINT FK_category_user FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Flow :
CREATE TABLE IF NOT EXISTS flow
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
