var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required:"Product name must be provided!"},
    inventory: {type: Number, required: true},
    _customer: [{type: Schema.Types.ObjectId, ref:"Customer"}],
    _order: [{type: Schema.Types.ObjectId, ref:"Order"}]
}, {timestamps: true});

mongoose.model("Product", ProductSchema);
