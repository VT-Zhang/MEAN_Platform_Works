var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, unique: true, required:"User's name must be provided."},
    topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
}, {timestamps: true});

mongoose.model("User", UserSchema);
