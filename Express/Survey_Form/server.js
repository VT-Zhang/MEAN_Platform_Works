var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("views",__dirname+"/views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.post("/result", function(req, res){
    var user_info = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment
    }
    res.render("result", {user: user_info});
})

app.listen(8000, function(){
    console.log("Launching the server, success! Listening to port: 8000...");
})
