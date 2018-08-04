//************************************* DATABASE CONNECTION *****************************/?
var mysql = require("mysql");

var connection;

var connection = mysql.createConnection({
    host: 'localhost',
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