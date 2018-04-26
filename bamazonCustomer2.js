var mysql = require('mysql');
var inquirer = require('inquirer');
var chalk = require('chalk');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw(err);
    console.log("Connected as id: " + connection.threadId);
    itemList();
});

function itemList() {
    connection.query("SELECT * FROM products", function(err, res){
        for (var i = 0; i < res.length; i++) {
            console.log(chalk.cyan.bgWhiteBright(res[i].id + " | " + res[i].product_name + 
            " | " + res[i].price + " | " + res[i].stock_quantity));
        }
        console.log(chalk.bgBlack.red("------------------------------------"));
        start();
    });
    
}

var start = function() {
    inquirer.prompt([
        {
        name: "itemId",
        type: "input",
        message: "What is the ID of the item you would like to purchase?"
        }
    ])
    .then(function(inquirerResponse) {
        var item = parseInt(inquirerResponse.itemId);
     if (item <= 12 && item >= 1) {
         console.log("Awesome! That matches our records.");
         connection.query("SELECT * FROM products WHERE id=?", [inquirerResponse.itemId], function(err, res) {
             quantity(res);
         });
         
     } else {
         console.log("This is not a valid ItemId");
         start();
     }

    }); 
};

var quantity = function(itemName) {
    console.log(itemName);
    inquirer.prompt([
        {
        name: "quantity",
        type: "input",
        message: "How many of " + itemName[0].product_name + "'s would you like to purchase?"
        }
    ])
    .then(function(inquirerResponse2) {
        console.log(inquirerResponse2);
        var userQuantity = parseInt(inquirerResponse2.quantity);
        var stockQuantity = parseInt(itemName[0].stock_quantity);
        if (userQuantity < stockQuantity && stockQuantity >= 1) {
            var query = connection.query("UPDATE products SET ? WHERE ?", 
            [
                {
                stock_quantity: (stockQuantity - userQuantity) 
                },
                {
                product_name: itemName[0].product_name
                }
            ],
            function(err, res) {
                if (err) throw err;
                console.log("You added " + userQuantity + " " + itemName[0].product_name +" to your cart for a total of " + (userQuantity * itemName[0].price) + " .");
                purchase();
            });
        } else {
            console.log("Ouch! We're not able to fill your order. We currently have " + stockQuantity + " avaiable for purchase. Check out our stock again");
            start();
        }
    });
};

function purchase() {
    inquirer.prompt([
        {
            name: "purchase",
            type: "confirm",
            message: "Is this correct?",
            default: false
        }
    ])
    .then(function(inquirerResponse3) {
        console.log(inquirerResponse3);
        if (inquirerResponse3 !== false) {
            console.log("Awesome! We added your purchase to your cart. Here's our options to keep shopping");
            quantity(inquirerResponse3);
            itemList();
        } else {
            console.log("Change of heart? It happens. Let's start over");
            itemList();
        }
    });
}



    // import {
    //     table,
    //     getBorderCharacters
    // } from 'table';
     
    // let config,
    //     data;
     
    // data = [
    //     ['0A', '0B', '0C'],
    //     ['1A', '1B', '1C'],
    //     ['2A', '2B', '2C']
    // ];
     
    // config = {
    //     border: getBorderCharacters(honeywell)
    // };
     
    // table(data, config);