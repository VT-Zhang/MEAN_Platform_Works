var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");

module.exports = {
    main: function(req, res){
        Product.find({}, function(err, products){
            if(err){
                console.log(err);
            }
        });
        Order.find({}, function(err, orders){
            if(err){
                console.log(err);
            }
        });
        Customer.find({}, function(err, customers){
            if(err){
                console.log(err);
            }
            res.json({customers: customers});
        });
    },

    index: function(req, res){
        Product.find({}, function(err, products){
            console.log(products);
            if(err){
                console.log(err);
            }
            res.json(products);
        });
    },

    create: function(req, res){
        Product.create(req.body, function(err, product){
            console.log(req.body);
            if(err){
                console.log(err);
            }
            res.json(product);
        });
    }
}
