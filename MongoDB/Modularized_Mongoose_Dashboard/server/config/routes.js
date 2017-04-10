var animals = require("../controller/animals.js");

module.exports = function(app){
    app.get("/", function(req, res){
        animals.index(req, res)
    })
    app.get("/mongooses/new", function(req, res){
        animals.new(req, res)
    })
    app.post("/mongooses", function(req, res){
        animals.create(req, res)
    })
    app.get("/mongooses/edit/:id", function(req, res){
        animals.edit(req, res)
    })
    app.post("/mongooses/:id", function(req, res){
        animals.update(req, res)
    })
    app.post("/mongooses/destroy/:id", function(req, res){
        animals.destroy(req, res)
    })
}
