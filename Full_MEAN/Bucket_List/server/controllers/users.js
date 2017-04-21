var mongoose = require("mongoose");
var User = mongoose.model("User");
var List = mongoose.model("List");

module.exports = {
    index: function(req, res){
        User.find({})
            .where("_id")
            .ne(req.params.id)
            .exec(function(err, users){
                if(err){
                    return res.json({errors: err.errors});
                }
                User.findOne({_id: req.params.id})
                .populate("lists")
                .exec(function(err, user){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                    return res.json({users: users, current_user: user});
                });
            });
    },

    create: function(req, res){
        User.findOne({name: req.body.name}, function(err, user){
            console.log(req.body.name);
            if(err){
                return res.json({errors: err.errors});
            }
            if(!user){
                User.create(req.body, function(err, newuser){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                    return res.json(newuser);
                });
            }
            else {
                return res.json(user);
            }
        });
    },

    show: function(req, res){
        User.findOne({_id: req.params.id})
        .populate("lists")
        .exec(function(err, user){
            if(err){
                return res.json({errors: err.errors});
            }
            List.find({checked: true, _user: req.params.id}, function(err, main_dones){
                if(err){
                    return res.json({errors: err.errors});
                }
                List.find({checked: false, _user: req.params.id}, function(err, main_pendings){
                    if(err){
                        return res.json({errors: err.errors});
                    }
                    List.find({checked: true, _taguser: req.params.id}, function(err, tag_dones){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                        List.find({checked: false, _taguser: req.params.id}, function(err, tag_pendings){
                            if(err){
                                return res.json({errors: err.errors});
                            }
                            return res.json({user:user, main_dones:main_dones, main_pendings:main_pendings, tag_dones:tag_dones, tag_pendings:tag_pendings});
                        });
                    });
                });
            });
        });
    }
}
