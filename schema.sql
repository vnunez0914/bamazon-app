DROP DATABASE IF EXISTS bamazon_DB;

CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,3) NULL,
  stock_quantity INTEGER(25) NULL,
  
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "Clothing", 25.50, 25), ("Gameboy", "Electronics", 55.50, 10), ("Sony TV", "Electronics", 112.50, 18),("How to Draw Horses", "Books", 8.00, 100),("Love Seat", "Furniture",  200.00, 5),("Magic Carpet", "Decor", 2000.50, 2),("Scuba Gear", "Outdoor", 300.50, 30),("Slow Cooker", "Kitchen Appliances", 2.50, 24)
