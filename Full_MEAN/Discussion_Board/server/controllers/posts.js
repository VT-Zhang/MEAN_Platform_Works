var mongoose = require("mongoose");
var User = mongoose.model("User");
var Topic = mongoose.model("Topic");
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

module.exports = {

    index: function(req, res){
        Topic.findOne({_id: req.params.id})
        .populate("posts")
        .populate("comments")
        .populate("_user")
        .exec(function(err, topic){
            if(err){
                return res.json({errors: err.errors});
            }
            Post.find({_topic: req.params.id}, function(err, posts){
                if(err){
                    return res.json({errors: err.errors});
                }
                Comment.find({_topic: req.params.id}, function(err, comments){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                    User.find({}, function(err, users){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                        return res.json({topic: topic, posts: posts, comments: comments, users: users});
                    });
                });
            });
        });
    },

    create: function(req, res){
        Post.create(req.body, function(err, post){
            if(err){
                return res.json({errors: err.errors});
            }
            return res.json(post);
        });
    }

}
