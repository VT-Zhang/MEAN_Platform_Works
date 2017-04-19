var mongoose = require("mongoose");
var User = mongoose.model("User");
var Topic = mongoose.model("Topic");
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

module.exports = {

    index: function(req, res){
        Post.find({_topic: req.params.id})
        .populate("_user")
        .populate("_topic")
        .populate("comments")
        .exec(function(err, posts){
            if(err){
                return res.json({errors: err.errors});
            }
            Topic.findOne({_id: req.params.id})
            .populate("_user")
            .exec(function(err, topic){
                if(err){
                    return res.json({errors: err.errors});
                }
                return res.json({posts: posts, topic: topic});
            });
        });
    },

    create: function(req, res){
        Post.create(req.body, function(err, post){
            if(err){
                return res.json({errors: err.errors});
            }
            User.findOne({_id: req.body._user}, function(err, user){
                if(err){
                    return res.json({errors: err.errors});
                }
                user.posts.push(post);
                user.save();
                return res.json({post: post, user: user});
            })

        });
    }

}
