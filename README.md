
# BAMAZON

Bamazon is an Amazon-like storefront that will take in orders from customers and deplete stock from the store's inventory. 

# How to use Bamazon

1. Bamazon will ask the user to select an item_id for the product that they would like to purchase. Then it will ask for how many units they would like to purchase. 

2. If the item is in stock Bamazon will give the user the total amount and update the product inventory. If there is no inventory left Bamazon will notify user.

3. In order to run Bamazon you will need to install the following npm packages. 

   * [console.table](https://www.npmjs.com/package/console.table)

   * [inquirer](https://www.npmjs.com/package/inquirer)

   * [mysql](https://www.npmjs.com/package/mysql)

   
 3. Type node bamazonCustomer.js to execute inquirer prompt. App will let user know if there is an Insufficient quantity.    

  
      ![](https://media.giphy.com/media/UqNAgFy7q4EfMyzp51/giphy.gif)
      ![](https://media.giphy.com/media/TGoiGinUHgYHC9h47D/giphy.gif)
   
  
 
 # Technology Used
 
* Javascript
* node.js
* Node Package Manager
* MySQL

# Issues

* Currently the app can only display the SQL database and updates the stock_quantity depending on how many units the user purchases
* It does not display the total price. Will update README with a giphy when it does.



# Future Developments:
* Have the table show customer the total and have a "manager" add inventory and restock
* Add prompt to have a list for the "manager" to restock and add products.


# Developer:
* Victor Nunez vnunez0914@gmail.com