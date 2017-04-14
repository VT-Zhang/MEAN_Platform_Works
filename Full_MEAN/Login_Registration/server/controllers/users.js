var mongoose = require("mongoose");
var User = mongoose.model("User");

function UserController(){
    var _this = this;
    this.index = function(req, res){
        User.find({}, function(err, data){
            res.json(data);
        });
    }
    this.create = function(req, res){
        res.json({wait:"to be filled"});
    }
    this.update = function(req, res){
        res.json({wait:"to be filled"});
    }
    this.delete = function(req, res){
        res.json({wait:"to be filled"});
    }
    this.show = function(req, res){
        res.json({wait:"to be filled"});
    }
    this.login = function(req, res){
        User.findOne({email: req.body.email}, function(err, data){
            if(err){
                res.json({error: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the inital error"
                            }
                        },
                        name: "Validator error"
                    }
                );
            }
            else if (data && data.validPassword(req.body.password)){
                res.json({_id: data._id});
            }
            else {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }
                );
            }

        })
    }

    this.register = function(req, res){
        var user = new User(req.body);
        user.save(funtion(err, newuser){
            if(err){
                res.json(err);
            }
            else {
                res.json({
                    _id: newuser._id
                })
            }
        });
    }

}

module.exports = new UsersController();
