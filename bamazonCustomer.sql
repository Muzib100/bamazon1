DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;
-- Makes it so all of the following code will affect animals_db --
USE bamazon_db;
-- Creates the table "people" within animals_db --
CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  prod_name VARCHAR(40) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  dept_name varchar(40) NOT NULL,
  -- Makes a sting column called "pet_name" --
  price float(10,2),
  -- Makes an numeric column called "pet_age" --
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);


-- Creates new rows containing data in all named columns --
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Silk Shirt", "Menswear" , 40.5, 100);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Cotton Shirt", "Menswear" , 30.5, 200);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Flannel Shirt", "Menswear" , 25.15, 150);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Wool Pants", "Menswear" , 65.5, 65);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Casual Pants", "Menswear" , 35.5, 125);

INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Silk Scarves", "Womens Clothing" , 30, 200);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Cashmere Shawl", "Womens Clothing" , 210, 40);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Women's parka", "Womens Clothing" , 99, 100);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Leather duffle bag", "Womens accessories" , 65, 100);
INSERT INTO products (prod_name, dept_name, price, stock_quantity)
VALUES ("Sun Glasses", "Womens accessories" , 45, 90);


