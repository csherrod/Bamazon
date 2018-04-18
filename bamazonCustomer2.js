var mysql = require('mysql');
var inquirer = require('inquirer');
var chalk = require('chalk');
var table = require('table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "wcs237",
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