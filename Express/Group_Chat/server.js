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

var all_users = [];
var all_messages = [];

var does_user_exist = function(user){
    for (var i=0;i<all_users.length;i++){
        if (user == all_users[i]){
            return true;
        }
    }
    return false;
}
io.sockets.on("connection", function(socket){
    console.log("WE ARE USING SOCKETS!!!");
    console.log(socket.id);
    socket.on("got_a_new_user", function(data){
        console.log(data);
        if(does_user_exist(data.user) === true){
            socket.emit("existing_user", {error: "Sorry, this user already exist, please choose another name!"});
        }
        else{
            all_users.push(data.user);
            socket.emit("load_messages", {current_user: data.user, messages: all_messages});
        }
    })
    socket.on("new_message", function(data){
        all_messages.push({name: data.user, message: data.message});
        io.emit("post_new_message", {new_message: data.message, user: data.user});
    })
})
