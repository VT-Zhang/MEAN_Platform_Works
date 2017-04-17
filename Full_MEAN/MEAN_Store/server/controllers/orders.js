var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");

module.exports = {
    index: function(req, res){
        Order.find({})
        .populate("_customer")
        .populate("products")
        .exec(function(err, orders){
            if(err){
                console.log(err);
            }
            Customer.find({}, function(err, customers){
                if(err){
                    console.log(err);
                }
                Product.find({}, function(err, products){
                    if(err){
                        console.log(err);
                    }
                    res.json({orders:orders, customers:customers, products:products});
                });
            });
        });
    },
    create: function(req, res){
        Order.create({_customer: req.params.customer_id, products: req.params.product_id, quantity: req.body.quantity}, function(err, order){
            if(err){
                console.log(err);
            }
            Customer.findOne({_id: req.params.customer_id}, function(err, customer){
                if(err){
                    console.log(err);
                }
                Product.findOne({_id: req.params.product_id}, function(err, product){
                    if(err){
                        console.log(err);
                    }
                    if (product.inventory >= req.body.quantity){
                        product.inventory -= req.body.quantity;
                    }
                    else {
                        res.json({errors: "Your inventory is not enough to fulfill this order!"});
                    }
                    product.save;
                });
                customer.products.push(product);
                customer.save;
            });
            order.products.push(product);
            order.save;
        });
        res.json(order);
    },
}
