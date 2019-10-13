var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index");
    })
    // res.render("index"); // remove this later on and unmark 3 lines above
})

module.exports = router;