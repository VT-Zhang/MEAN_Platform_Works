var peoples = require("./../controller/peoples.js");

module.exports = function(app){
    app.get("/", function(req, res){
        peoples.index(req, res)
    })
    app.get("/new/:name", function(req, res){
        peoples.new(req, res)
    })
    app.get("/remove/:name", function(req, res){
        peoples.destroy(req, res)
    })
    app.get("/:name", function(req, res){
        peoples.show(req, res)
    })
}
