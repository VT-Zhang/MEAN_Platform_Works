var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

module.exports = {
  index: function(req,res){
    Friend.find({}, function(err, friends){
        if(err){
            console.log(err);
        }
        console.log(friends);
        res.json(friends);
    });
  },
  create: function(req, res){
        console.log("**********This is from req.body:********");
        console.log(req.body);
        Friend.create(req.body, function(err, friend){
            if(err){console.log(err);}
            res.json(friend);
        });
  },
  update: function(req, res){
    Friend.findOne({_id:req.params.id}, function(err, friend){
        if(err){console.log(err);}
        friend.first_name = req.body.first_name;
        friend.last_name = req.body.last_name;
        friend.dob = req.body.dob;
        friend.save(function(err, updatedFriend){
            if(err){console.log(err);}
            res.json(updatedFriend);
        });
    });
  },
  delete: function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
        if(err){
            console.log(err);
        }
    });
    Friend.find({},function(err, friends){
        if(err){
            console.log(err);
        }
        console.log(friends);
        res.json(friends);
    });
  },
  show: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
        if(err){console.log(err);}
        res.json(friend);
    });
  }
}
