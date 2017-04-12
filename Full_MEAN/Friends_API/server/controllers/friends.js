var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

module.exports = {
  index: function(req,res){
    Friend.find({}, function(err, friends){
        if(err){
            console.log(err);
        }
    })
    res.json(friends);
  },
  create: function(req,res){
    Friend.create(req.body, function(err, friends){
        if(err){
            console.log(err);
        }
        else{
            res.json(friends);
        }
    })
  },
  update: function(req,res){
    Friend.findOne({_id:req.params.id}, function(err, friend){
        if(err){
            console.log(err);
        }
        else{
            friend.first_name: req.body.first_name;
            friend.last_name: req.body.last_name;
            friend.dob: req.body.dob;
            friend.save(function(err, updatedFriend){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(updatedFriend);
                }
            })
        }
    })
  },
  delete: function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.json({message: "Friend deleted!"})
        }
    })
  },
  show: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
        res.json(friend);
    })
  }
}
