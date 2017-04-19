var mongoose = require("mongoose");
var users = require("./../controllers/users.js");
var topics = require("./../controllers/topics.js");
var posts = require("./../controllers/posts.js");
// var comments = require("./../controllers/comments.js");

module.exports = function(app){
    app.post("/users", function(req, res){
        users.create(req, res);
    });
    app.get("/users/:id", function(req, res){
        users.show(req, res);
    });

    app.get("/dashboard", function(req, res){
        topics.index(req, res);
    });
    app.post("/topics", function(req, res){
        topics.create(req, res);
    });

    app.get("/topics/:id", function(req, res){
        posts.index(req, res);
    });
    app.post("/posts", function(req, res){
        posts.create(req, res);
    });
    app.post("/posts/:id/likes", function(req, res){
        posts.like(req, res);
    });
    app.post("/posts/:id/dislikes", function(req, res){
        posts.dislike(req, res);
    });
}
