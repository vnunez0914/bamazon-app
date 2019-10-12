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
  displayTable();
});

function displayTable() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    else {
      console.log("\n~~~~~~~WELCOME TO BAMAZON~~~~~~");
      console.table("\n", res, "\n");
      itemSelect(res);
    }
  });
}
function itemSelect(pastResponse) {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Please select product by item_id to purchase."
      },
      {
        name: "units",
        type: "input",
        message: "How many units of this product would you like to purchase?"
      }
    ])
    .then(function(ans) {
      var itemID = ans.id;
      var unitQuantity = ans.units;
      // console.log(pastResponse);
      for (let i = 0; i < pastResponse.length; i++) {
          if(pastResponse[i].item_id == itemID){
            if(pastResponse[i].stock_quantity > unitQuantity){

              var newQuantity = pastResponse[i].stock_quantity - unitQuantity;
              console.log(newQuantity);
              updateStock(newQuantity, itemID);
              // total()
            }
            else{
              console.log("insufficient quantity");
              
            }
            

          }    
      }
      
      
     

    });
}

function updateStock(newQuantity, itemID) {
  connection.query("UPDATE products SET stock_quantity = " + newQuantity + " WHERE item_id= " + itemID,function(err, res) {
      if (err) throw err;
     
      console.log("");
      console.log("Your Order has been Processed");
      console.log("Thank you for Shopping with us...!");
      console.log("");
      displayTable();
    }
  );
  // connection.end();
}
