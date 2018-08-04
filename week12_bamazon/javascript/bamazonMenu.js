//********************************* DEPENDENCIES ****************************************//
var inquirer = require('inquirer');
var prompt = require('prompt');
var customer = require("./bamazonCustomer.js");
//********************************* QUESTIONS *********************************************//
prompt.start();

var menu = {
    initializeStore: function () {

        inquirer.prompt([{
            type: 'list',
            message: 'What Department Would You Like To Shop From?',
            choices: ['Computer Monitors', 'Internal SSDS', 'Video Cards', 'Computer Memory'], 
            name: 'departments'
        }]).then(answers => {
            if(answers.departments === 'Computer Monitors') {
                var query = "SELECT * FROM bamazonDB.products WHERE id = 1, 2, 3;"
                customer.readProducts(query);
                menu.getInput();
            };
            if (answers.departments === 'Internal SSDS') {
                var query = "SELECT * FROM bamazonDB.products WHERE id = 7, 8, 9;"
                customer.readProducts(query);
            };
            if (answers.departments === 'Computer Memory') {
                var query = "SELECT * FROM bamazonDB.products WHERE id = 4, 5, 6;"
                customer.readProducts(query);
            };
            if (answers.departments === 'Video Cards') {
                var query = "SELECT * FROM bamazonDB.products WHERE id = 10;"
                customer.readProducts(query);
            };

        });
    },

    getInput: function() {
        console.log('Please enter the ID and Quantity for the product you would like to order');
        // validat input
        var schema = {
            properties: {
                ID: {
                    type: 'integer',
                    message: 'You must enter a number',
                    required: true
                },
                Quantity: {
                    type: 'integer',
                    message: 'You must enter a number',
                    required: true
                }
            }
        };
        // get input
        prompt.get(schema, function (err, result) {
            console.log('User input received:');
            console.log('  Product ID Entered: ' + result.ID);
            console.log('  Quantity Entered: ' + result.Quantity);
            var quantityEntered = result.Quantity;
            var idEntered = result.ID;
            var query = `SELECT * FROM bamazonDB.products WHERE id = ${idEntered};`
            customer.updateProducts(query, quantityEntered, idEntered)
        })
    }
};d


menu.initializeStore();
    
















