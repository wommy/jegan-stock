-- LOG for creating schema

CREATE TABLE stock {
	_ID int AUTO_INCREMENT PRIMARY KEY,
	name varchar NOT NULL UNIQUE,
}

CREATE TABLE quantity {
	_ID int AUTO_INCREMENT PRIMARY KEY,
	stock_ID int FOREIGN KEY REFERENCES stock(_ID),
	quantity int NOT NULL
}

CREATE TABLE productComponents {
	product_ID int FOREIGN KEY REFERENCES stock(_ID),
	material_ID int FOREIGN KEY REFERENCES stock(_ID),
	CONSTRAINT product PRIMARY KEY (product_ID, material_ID)
}