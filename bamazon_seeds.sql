DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (100) NOT NULL,
  department_name VARCHAR (100) NOT NULL,
  price DECIMAL (10,2) NULL, 
  stock_quantity INT (10) NULL,
  PRIMARY KEY (id)
  );
  
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Electronics", 84.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scale", "Health", 11.99, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Umbrella", "Household", 16.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Watch", "Jewelry", 499.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Razor", "Beautry", 8.99, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Bed", "Pets", 19.99, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chew Toy", "Pets", 5.99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dumbbell", "Health", 9.49, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ipad", "Electronics", 199.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hammer", "Tools", 11.49, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drill", "Tools", 46.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wrench", "Tools", 12.99, 2);

  