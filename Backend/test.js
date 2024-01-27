const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#WM@b2000#",
  database: "new_schema",
});

// SQL query to create the 'login' table
const createLoginTable = `
  CREATE TABLE IF NOT EXISTS login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
  )
`;

// SQL query to create the 'user_profile' table
const createUserProfileTable = `
  CREATE TABLE IF NOT EXISTS user_profile (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    profile_data TEXT,
    FOREIGN KEY (user_id) REFERENCES login(id)
  )
`;

// Execute the queries to create the tables
db.query(createLoginTable, (err) => {
  if (err) {
    console.error("Error creating login table:", err);
  } else {
    console.log("Login table created successfully");
  }
});

db.query(createUserProfileTable, (err) => {
  if (err) {
    console.error("Error creating user_profile table:", err);
  } else {
    console.log("User profile table created successfully");
  }
});

// Define your signup and login routes below

app.post("/signup", (req, res) => {
  // Your signup logic
});

app.post("/login", (req, res) => {
  // Your login logic
});

app.listen(8081, () => {
  console.log("Listening on port 8081...");
});
