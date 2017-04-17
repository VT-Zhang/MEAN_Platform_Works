var mongoose = require("mongoose");
var users = require("./../controllers/users.js");
var messages = require("./../controllers/messages.js");
var comments = require("./../controllers/comments.js");

module.exports = function(app){
    app.post("/users", function(req, res){
        users.create(req, res);
    });
    app.get("/messages", function(req, res){
        messages.index(req, res);
    });
    app.post("/:id/messages", function(req, res){
        messages.create(req, res);
    });
    app.post("/:id/messages/:message_id/comments", function(req, res){
        comments.create(req, res)
    });
}
