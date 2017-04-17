var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    quantity: {type: Number, required: true},
    _customer: [{type: Schema.Types.ObjectId, ref:"Customer"}],
    products: [{type: Schema.Types.ObjectId, ref:"Order"}]
}, {timestamps: true});

mongoose.model("Order", OrderSchema);
