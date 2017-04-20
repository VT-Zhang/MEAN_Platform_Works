var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required:"User's name must be provided."},
    lists: [{type: Schema.Types.ObjectId, ref: "List"}],
}, {timestamps: true});

mongoose.model("User", UserSchema);
