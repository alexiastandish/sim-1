DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory
(
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(1000) NOT NULL,
  product_price FLOAT,
  img VARCHAR(1000) NOT NULL
);

