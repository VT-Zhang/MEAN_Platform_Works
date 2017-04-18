var mongoose = require("mongoose");
var Topic = mongoose.model("Topic");
var User = mongoose.model("User");

module.exports = {

    index: function(req, res){
        Topic.find({})
        .populate("_user")
        .exec(function(err, topics){
            if(err){
                return res.json({errors: err.errors});
            }
            console.log(topics);
            User.find({}, function(err, users){
                if(err){
                    return res.json({errors: err.errors});
                }
                return res.json({topics: topics, users: users});
            });
        });
    },

    create: function(req, res){
        console.log(req.body);
        User.findOne({_id: req.body._user}, function(err, user){
            if(err){
                return res.json({errors: err.errors});
            }
            Topic.create(req.body, function(err, newtopic){
                if(err){
                    return res.json({errors: err.errors});
                }
                user.topics.push(newtopic);
                user.save(function(err){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                return res.json(newtopic);
                });
            });
        });
    }

}
