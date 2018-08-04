//************************************* DATABASE CONNECTION *****************************/?
var mysql = require("mysql");

var connection;

var connection = mysql.createConnection({
    host: 127.0.0.1,
    port: 8889,

    // Username
    user: "root",

    // Password
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;