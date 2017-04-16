var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    content: {type: String, required: "Message content can't be empty."},
    commnets: [{type: Schema.Types.ObjectId, ref: "Comments"}]
}, {timestamps: true});

mongoose.model("Message", MessageSchema);
