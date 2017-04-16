var mongoose = require("mongoose");
var Message = mongoose.model("Message");
var User = mongoose.model("User");

module.exports = {
    index: function(req, res){
        User.find({}, (function(err, users){
            if(err){
                res.json(err);
            }
            Message.find({})
            .populate("comments")
            .populate("_user")
            .exec(function(err, messages){
                if(err){
                    res.json(err);
                }
                res.json({users:users, messages: messages});
            });
        }));
    },
    create: function(req, res){
        User.findOne({_id:req.params.id}, function(err, user){
            Message.create({_user:user.id, content: req.body.content}, function(err, message){
                if(err){
                    res.json(err);
                }
                user.message.push(message);
                user.save();
                res.json(message);
            });
        });
    }
}
