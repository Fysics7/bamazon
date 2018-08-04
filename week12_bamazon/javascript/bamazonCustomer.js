//********************************* DEPENDENCIES ****************************************//
var Table = require('cli-table2');
var connection = require("./sqlConnection");
//********************************* QUERIES *********************************************//

var customer = {

    readProducts: function (query) {
        connection.query(query, function(err, res, fields) {

            if (err) throw err;
            // create table information
            var table = new Table({
                head: ['ID', 'Product', 'Price', 'Stock'],
                colWidths: [10, 50, 10, 10]
            });
            
            // loop through the query results
            for (i = 0; i < res.length; i++) {
                // push those results to the table 
                table.push(
                    [res[i].id, res[i].product_name, "$" + res[i].price, res[i].stock_quantity]
                );
            }
            // log table info to console
            console.log(table.toString());
            
        });
        
    },

    updateProducts: function (query, quantityEntered, idEntered) {
        connection.query(query, function (err, res, fields) {
            if (err) throw err;
            for (i = 0; i < res.length; i++) {
                if (res[i].stock_quantity > quantityEntered) {
                    console.log(`Your order for ${quantityEntered} - ${res[i].product_name} has been placed.`);
                    var newQuantity = res[i].stock_quantity - quantityEntered;
                    var query = `UPDATE bamazonDB.products SET stock_quantity = ${newQuantity} WHERE id = ${idEntered};`
                    customer.updateProducts(query);
                    customer.endConnection();
                } else {
                    console.log(`There are only ${res[i].stock_quantity} ${res[i].product_name} left in stock. Please place a new order.`);
                    customer.endConnection();
                }
            }
        });
    },

    endConnection: function () {
        connection.end();
    }
}





