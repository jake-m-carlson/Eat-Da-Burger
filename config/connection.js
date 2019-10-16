// Set up MySQL connection.
var mysql = require("mysql");

var connection;
console.log("We're gonna need a bigger boat", process.env.JASWDB_URL);
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection({
        host: process.env.JAWSDB_URL,
        user: 'n6bd3t565y51miw9',
        database: 'd6fijfz756gt56ff',
        port: 3306,
        password: 'y1pnl2ud9clpilrm'
    });
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Modcoz16!',
        database: 'burgers_db'
    })
};

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Modcoz16!",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err)throw err;
  
//   {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
// possibly unmark 3 lines above later?????
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
