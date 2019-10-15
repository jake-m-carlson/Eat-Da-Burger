var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        // ? does "burgers" refer to table burgers????
        orm.all("burgers", function(res){
            cb(res);
        })
    },
    update: function(id,cb){
        orm.update("burgers",id,cb);
    }
}

module.exports = burger;