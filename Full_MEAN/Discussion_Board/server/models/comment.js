var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    content: {type: String, required:"Comment content must be provided."},
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    _topic: {type: Schema.Types.ObjectId, ref: "Topic"},
    _post: {type: Schema.Types.ObjectId, ref: "Post"}
}, {timestamps: true});

mongoose.model("Comment", CommentSchema);
