DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (

    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR (50) NOT NULL,
    product_name VARCHAR (50) NOT NULL,
    price DECIMAL (13,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
    
);