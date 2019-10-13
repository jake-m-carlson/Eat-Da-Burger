var connection = require("../config/connection.js");
// var connection = require("./connection.js");     > video shows?
var orm = {
    all: function(tableInput, cb){
        connection.query("SELECT * FROM "+tableInput+";", function(err,result){
            if(err) throw err;
            cb(result)
        })
    },
    
    update: function(tableInput, condition, cb){
        // this will change devour to true, and update that object
        connection.query("UPDATE "+tableInput+"SET devour=true WHERE id="+condition+";", function(err,result){
            if(err)throw err;
            cb(result);
        })
    }
};

module.exports = orm;
