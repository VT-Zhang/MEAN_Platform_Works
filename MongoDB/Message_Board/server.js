var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.listen(8000, function(){
    console.log("Server starts successfull! Listening to port: 8000!");
})

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Message_Board");
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    poster: {type: String, required: true, minlength: 4},
    message: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true});
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref:"Message"},
    commenter: {type: String, required: true, minlength: 4},
    comment: {type: String, required: true}
}, {timestamps: true});
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

app.get("/", function(req, res){
    Message.find().populate("comments").exec(function(err, messages){
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {messages});
        }
    })
})

app.post("/message/", function(req, res){
    message = new Message({poster: req.body.name, message: req.body.message});
    message.save(function(err){
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/");
        }
    })
})

app.post("/message/:id/comment", function(req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        if(err){
            console.log(err);
        }
        else{
            comment = new Comment({commenter: req.body.name, comment: req.body.comment, _message: message._id});
            comment.save(function(err){
                if(err){
                    console.log(err);
                }
                else{
                    message.comments.push(comment._id);
                    message.save(function(err){
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.redirect("/");
                        }
                    });
                }
            });
        }
    });
})
