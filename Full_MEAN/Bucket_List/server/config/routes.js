var mongoose = require("mongoose");
var users = require("./../controllers/users.js");
var lists = require("./../controllers/lists.js");

module.exports = function(app){

    app.post("/users", function(req, res){
        users.create(req, res);
    });

    app.post("/lists", function(req, res){
        lists.create(req, res);
    });


}
