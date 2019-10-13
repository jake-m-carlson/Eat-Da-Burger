var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        // ? does "burgers" refer to table burgers????
        orm.all("burgers", function(res){
            cb(res);
        })
    }
}

module.exports = burger;