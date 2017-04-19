var mongoose = require("mongoose");
var User = mongoose.model("User");
var Topic = mongoose.model("Topic");
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

module.exports = {

    index: function(req, res){
        Topic.findOne({_id: req.params.id})
        .populate("_user")
        .populate("posts")
        .exec(function(err, topic){
            if(err){
                return res.json({errors: err.errors});
            }
            Post.find({_topic: topic._id})
            .populate("comments")
            .populate("_user")
            .exec(function(err, posts){
            if(err){return res.json({errors: err.errors})};
            return res.json({topic: topic, posts: posts} )
        });
        });
    },

    create: function(req, res){
        Post.create(req.body, function(err, post){
            if(err){
                return res.json({errors: err.errors});
            }
            Topic.findOne({_id: req.body._topic}, function(err, topic){
                if(err){
                    return res.json({errors: err.errors});
                }
                User.findOne({_id: req.body._user}, function(err, user){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                    user.posts.push(post);
                    user.save(function(err){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                    });
                    topic.posts.push(post);
                    topic.save(function(err){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                    });
                    return res.json(post);
                });
            });
        });
    },

    like: function(req, res){
        Post.findOne({_id: req.params.id}, function(err, post){
            if(err){
                return res.json({errors: err.errors});
            }
            post.likes += 1;
            post.save(function(err){
                if(err){
                    return res.json({errors: err.errors});
                }
                return res.json(post);
            });
        });
    },


    dislike: function(req, res){
        Post.findOne({_id: req.params.id}, function(err, post){
            if(err){
                return res.json({errors: err.errors});
            }
            post.dislikes += 1;
            post.save(function(err, post){
                if(err){
                    return res.json({errors: err.errors});
                }
                return res.json(post);
            });
        });
    },

}
