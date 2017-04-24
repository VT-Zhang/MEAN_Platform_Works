var mongoose = require("mongoose");
var User = mongoose.model("User");
var List = mongoose.model("List");

module.exports = {
    create: function(req, res){
        User.findOne({_id: req.body._user}, function(err, user){
            if(err){
                return res.json({errors: err.errors});
            }
            List.create({_user: req.body._user, title: req.body.title, description: req.body.description, _taguser: req.body._taguser}, function(err, list){
                if(err){
                    return res.json({errors: err.errors});
                }
                User.findOne({_id: req.body._taguser}, function(err, taguser){
                    console.log(taguser);
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
                    list.tagname = taguser.name;
                    list.save(function(err){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                    });
                    return res.json(list);
                });
            });
        });
    },

    update: function(req, res){
        List.findOne({_id: req.params.id}, function(err, list){
            if(err){
                return res.json({errors: err.errors});
            }
            if (list.checked == false){
                list.checked = true;
            }
            else if (list.checked == true){
                list.checked = false;
            }
            list.save(function(err){
                if(err){
                    return res.json({errors: err.errors});
                }
            });
            return res.json(list);
        });
    }
}
