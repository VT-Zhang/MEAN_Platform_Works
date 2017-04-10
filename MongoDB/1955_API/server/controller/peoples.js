var mongoose = require("mongoose");
var People = mongoose.model("People");

module.exports = {
    index: function(req, res){
        People.find({}, function(err, people){
            if(err){
                console.log(err);
            }
            else{
                res.json({people});
            }
        });
    },

    new: function(req, res){
        people = new People({name: req.params.name});
        people.save(function(err){
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/");
            }
        });
    },

    destroy: function(req, res){
        People.remove({name: req.params.name}, function(err){
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/");
            }
        });
    },

    show: function(req, res){
        People.findOne({name: req.params.name}, function(err, people){
            if(err){
                console.log(err);
            }
            else{
                res.json({people});
            }
        });
    }
}
