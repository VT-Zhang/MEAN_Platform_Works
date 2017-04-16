var mongoose = require("mongoose");
var User = mongoose.model("User");
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

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
        User.findOne({username: req.body.username}, function(err, user){
            if(err){
                res.json(err);
            }
            if(!user){
                User.create(req.body, function(err, user){
                    if(err){
                        res.json(err);
                    }
                    res.json(user);
                });
            }
            else {
                res.json(user);
            }
        });
    }
}
