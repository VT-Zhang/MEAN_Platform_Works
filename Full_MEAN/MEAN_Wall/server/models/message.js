var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    content: {type: String, required: "Message content can't be empty."},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true});

mongoose.model("Message", MessageSchema);
