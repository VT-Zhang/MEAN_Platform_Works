var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    content: {type: String, required:"Post content must be provided."},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    _topic: {type: Schema.Types.ObjectId, ref: "Topic"}
}, {timestamps: true});

mongoose.model("Post", PostSchema);
