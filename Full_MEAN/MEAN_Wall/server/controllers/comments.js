var mongoose = require("mongoose");
var Comment = mongoose.model("Comment");
var Message = mongoose.model("Message");
var User = mongoose.model("User");

module.exports = {
    create: function(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){
                res.json(err);
            }
            Message.findOne({_id: req.params.message_id}, function(err, message){
                if(err){
                    res.json(err);
                }
                Comment.create({_user: req.params.id, _message: req.params.message_id, name: user.username, content: req.body.content}, function(err, comment){
                    console.log("*******This is req.params.id*******");
                    console.log(req.params.id);
                    console.log("*******This is req.params.message_id*******");
                    console.log(req.params.message_id);
                    if(err){
                        res.json(err);
                    }
                    user.comments.push(comment);
                    message.comments.push(comment);
                    user.save();
                    message.save();
                    res.json({success: "Commend posted!"})
                });
            });
        });
    }
}
