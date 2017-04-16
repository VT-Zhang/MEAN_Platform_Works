var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: "Username must be provided"},
    messages: [{type: Schema.Types.ObjectId, ref:"Message"}],
    comments: [{type: Schema.Types.ObjectId, ref:"Comment"}]
}, {timestamps: true});

mongoose.model("User", UserSchema);
