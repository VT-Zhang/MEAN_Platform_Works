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

var server = app.listen(6789, function(){
    console.log("SERVER UP SUCESS, LISTENING ON PORT 6789..");
})

var io = require("socket.io").listen(server);

var counter = 0;

io.sockets.on("connection", function(socket){
    console.log("WE ARE USING SOCKETS!!!");
    console.log(socket.id);

    socket.on("count_number", function(data){
        counter += 1;
        io.emit("updated_message", {response: counter});
    })

    socket.on("reset_counter", function(data){
        counter = 0;
        io.emit("updated_message", {response: counter});
    })

})
