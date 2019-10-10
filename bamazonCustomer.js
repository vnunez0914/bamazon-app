var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  displayTable()
});

function displayTable() {
  connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      else {
          console.log(                "\n~~~~~~~WELCOME TO BAMAZON~~~~~~")
          console.table("\n",res, "\n");
          itemSelect();
    }
  });
}
function itemSelect() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Please select product by item_id to purchase.",
    
      },
      {
        name: "units",
        type: "input",
        message: "How many units of this product would you like to purchase?",
    
      }
    ])
    .then(function(ans) {
        var itemID = ans.id;
        var unitQuantity = ans.units;
        console.log(itemID, unitQuantity);
        connection.end();
    });
}

