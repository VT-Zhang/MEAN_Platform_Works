var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
    title: {type: String, required:"Topic title must be provided."},
    description: {type: String, required:"Topic description must be provided."},
    category: {type: String, required:"Topic category must be provided."},
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    _user: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true});

mongoose.model("Topic", TopicSchema);
