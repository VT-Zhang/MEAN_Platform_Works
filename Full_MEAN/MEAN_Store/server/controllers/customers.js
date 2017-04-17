var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

module.exports = {
    index: function(req, res){
        Customer.find({}, function(err, customers){
            if(err){
                console.log(err);
            }
            res.json(customers);
        });
    }
    create: function(req, res){
        Customer.findOne({name: req.body.cname}, function(err, customer){
            if(err){
                res.json(err);
            }
            if(!customer){
                Customer.create(req.body, function(err, customer){
                    if(err){
                        res.json(err);
                    }
                    res.json(customer);
                });
            }
            else {
                res.json({errors: "Cusomter is already in the system!"});
            }
        });
    }
    destroy: function(req, res){
        Customer.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(err);
            }
        });
    }
}
