var mongoose = require("mongoose");
var Animal = mongoose.model("Animal");

module.exports = {
    index: function(req, res){
        Animal.find({}, function(err, animals){
            if(err){
                console.log(err);
            }
            console.log(animals);
            res.render("index", {animals});
        })
    },

    new: function(req, res){
        res.render("new");
    },

    create: function(req, res){
        console.log("Data from the FORM: ", req.body);
        var animal = new Animal({name: req.body.name, kind: req.body.kind, build: req.body.build});
        animal.save(function(err){
            if(err){
                res.render("new", {errors: animal.errors})
            }
            else{
                res.redirect("/");
            }
        });
    },

    edit: function(req, res){
        Animal.findOne({_id:req.params.id}, function(err, animal){
            if(err){
                console.log(err);
            }
            else{
                res.render("edit", {animal});
            }
        });
    },

    update: function(req, res){
        Animal.findOne({_id:req.params.id}, function(err, animal){
            animal.name = req.body.name;
            animal.kind = req.body.kind;
            animal.build = req.body.build;
            animal.save(function(err){
                if(err){
                    res.render("edit", {errors: animal.errors})
                }
                else{
                    res.redirect("/");
                }
            });
        });
    },

    destroy: function(req, res){
        Animal.findOne({_id:req.params.id}, function(err, animal){
            animal.remove();
            res.redirect("/");
        });
    }

}
