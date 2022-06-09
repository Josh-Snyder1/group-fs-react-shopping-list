-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE items (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "qty" INT,
    "unit" VARCHAR(200) NOT NULL,
    "isPurchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO items
	(name, qty, unit)
VALUES
	('Apples', 12, 'Bushel'),
	('Milk', 2, 'Gallon'),
	('Wochestershire', 1, 'Bottle'),
	('Mac-n-Cheese', 6, 'Boxes'),
	('Steak', 8, 'oz'),
	('Coffee', 2, 'Bags');

SELECT * FROM "items"
ORDER BY "name"