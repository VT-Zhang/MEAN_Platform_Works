var mongoose = require("mongoose");
var Comments = mongoose.model("Comment");
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
                Comments.create({_user: user._id, _message: message._id, name: user.username, content: req.body.content}, function(err, comment){
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
        }
    }
}
