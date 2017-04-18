var mongoose = require("mongoose");
var Topic = mongoose.model("Topic");

module.exports = {
    index: function(req, res){
        Topic.find({}, function(err, topics){
            if(err){
                return res.json({errors: err.errors});
            }
            return res.json(topics);
        });
    },
    create: function(req, res){
        User.findOne({_id: req.body.user_id}, function(err, user){
            if(err){
                return res.json({errors: err.errors});
            }
            Topic.create(req.body, function(err, newtopic){
                if(err){
                    return res.json({errors: err.errors});
                }
            });
            user.topics.push(newtopic);
            user.save(function(err){
                if(err){
                    return res.json({errors: err.errors});
                }
            });
            return res.json(newtopic);
        });
    }
}
