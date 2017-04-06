var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

var server = app.listen(8000, function(){
    console.log("SERVER UP SUCESS, LISTENING ON PORT 8000..");
})

var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket){
    console.log("We are using sockets!!!");
    console.log(socket.id);

    socket.on("posting_form", function(data){
        socket.emit("updated_message", {response: data});
        var num = Math.floor(Math.random()*1000)+1;
        socket.emit("random_number", {response: num});
    })
})
