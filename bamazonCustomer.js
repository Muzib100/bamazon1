var mysql = require("mysql");
var chalk = require("chalk");
var inquirer = require("inquirer");

var entry_id;
var qty_wanted;

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Please type in product id?",
      name: "id"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    
    {
      type: "input",
      message: "Please type in quantity",
      name: "quantity"
    },

    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
    
  ])
  .then(function(inquirerResponse) {
    
    if (inquirerResponse.confirm) {
      
      console.log("Rcv order of id: " + inquirerResponse.id + ", quantity: " + inquirerResponse.quantity);
      entry_id = inquirerResponse.id;
      qty_wanted = inquirerResponse.quantity;
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }

    connection.connect(function(err) {
          if (err) throw err;
          //console.log("connected as id " + connection.threadId);
          getAllProducts(connection, entry_id, qty_wanted);
          
          //console.log("prod_price: ", prod_price);
          
          
        });


  });



var stock_quantity;
var prod_price;


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Mhk1656@",
  database: "bamazon_db"
});

// connection.connect(function(err) {
//   if (err) throw err;
//   //console.log("connected as id " + connection.threadId);
//   getAllProducts(connection, entry_id, qty_wanted);
  
//   //console.log("prod_price: ", prod_price);
  
  
// });



function getAllProducts(connection, entry, qty) {
  connection.query('select * from products WHERE id = ?', [entry],  function(err, result) {
    if (err) { throw err}
       
      console.log(result);
      currentQuantity = result[0].stock_quantity;
      store_price = result[0].price;
      
      new_qty = currentQuantity - qty;
      console.log(chalk.bold.green("new quantity: ", new_qty));
      
      //console.log("new_qty: ", new_qty);  

      if (new_qty){
          console.log(chalk.bold.red("Your charge: $", store_price * qty ));
          } else {
          console.log (chalk.bold.red("Insufficient quantity available "));
        }

  

  connection.query('UPDATE products SET stock_quantity = ? WHERE id = ?',[new_qty, entry], function (err, result) {
  if (err) throw err;
     //console.log(result);
     //console.log(result.affectedRows + " record(s) updated");
      
   });

      connection.end();

    
  })
}