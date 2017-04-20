var mongoose = require("mongoose");
var User = mongoose.model("User");
var List = mongoose.model("List");

module.exports = {
    create: function(req, res){
        User.findOne({_id: req.body._user}, function(err, user){
            if(err){
                return res.json({errors: err.errors});
            }
            List.create(req.body, function(err, list){
                if(err){
                    return res.json({errors: err.errors});
                }
                User.findOne({_id: req.body.taguser}, function(err, taguser){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                    user.lists.push(list);
                    user.save(function(err){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                    });
                    taguser.lists.push(list);
                    taguser.save(function(err){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                    });
                    return res.json(list);
                });
            });
        });
    }
}
