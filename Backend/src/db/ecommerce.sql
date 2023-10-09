CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT,
rol VARCHAR(50),
name VARCHAR(255),
surname VARCHAR(255),
address VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255),
password VARCHAR(100),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products (
id INT AUTO_INCREMENT,
name VARCHAR(255),
price DECIMAL(5,2),
size VARCHAR(255),
categorie VARCHAR(255),
url VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    total_price DECIMAL(10, 2),
    shipping_address VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS orderDetails (
    id INT AUTO_INCREMENT NOT NULL,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO users (
rol, name, surname, address, phone, email, password) VALUES
("admin", "esteban", "olmedo", "san lorenzo 440", "3517039840", "tebi15@hotmail.com", "$2b$12$6zECtS2oBuow4s55gAGxyOjYMp10Sh5QgQmDAumdhH.lZNmwpkBBG");

-- $2b$12$6zECtS2oBuow4s55gAGxyOjYMp10Sh5QgQmDAumdhH.lZNmwpkBBG
-- 2648pkmn

-- mati@hotmail.com
-- 123456789

--  sequelize,
--     modelName: 'products',
--     timestamps: false,