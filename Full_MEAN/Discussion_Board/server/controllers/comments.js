var mongoose = require("mongoose");
var User = mongoose.model("User");
var Topic = mongoose.model("Topic");
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

module.exports = {
    create: function(req, res){
        User.findOne({_id: req.body._user}, function(err, user){
            if(err){
                return res.json({errors: err.errors});
            }
            Topic.findOne({_id: req.body._topic}, function(err, topic){
                if(err){
                    return res.json({errors: err.errors});
                }
                Post.findOne({_id: req.body._post}, function(err, post){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                    Comment.create(req.body, function(err, comment){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                        post.comments.push(comment);
                        post.save(function(err){
                            if(err){
                                return res.json({errors: err.errors});
                            }
                        });
                        topic.comments.push(comment);
                        topic.save(function(err){
                            if(err){
                                return res.json({errors: err.errors});
                            }
                        });
                        user.comments.push(comment);
                        user.save(function(err){
                            if(err){
                                return res.json({errors: err.errors});
                            }
                        });
                        console.log(comment);
                        return res.json(comment);
                    });
                });
            });
        });
    },
}
