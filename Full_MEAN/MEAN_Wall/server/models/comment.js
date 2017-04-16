var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    _message: {type: Schema.Types.ObjectId, ref: "Message"},
    content: {type: String, required: "Comment content can't be empty."},
    name: {type: String, required: "Comment name can't be empty."},
}, {timestamps: true});

mongoose.model("Comment", CommentSchema);
