// (A) LOAD DB MODULE
const mysql = require("mysql");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
const db = mysql.createConnection({
    host: "localhost:3000",
    user: "root",
    password: "",
    database: "agfrllpd"
});
db.connect((err) => {
    if (err) { throw err; }
    console.log("DB connection OK");
});

// (C) QUERY
db.query("SELECT * FROM `users`", (err, results) => {
    if (err) { throw err; }
    console.log(results);
});