var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// var PORT =  8080;
var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"))
app.use(express.json());
// app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars",exphbs({
    defaultLayout: "main"
}));

app.set("view engine","handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/",routes);

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
    });
    
// app.listen(PORT);
