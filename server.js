var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
app.listen(PORT);

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride("method"));
app.engine("handlebars",exphbs({
    defaultLayout: "main"
}));

app.set("view engine","handlebars");

