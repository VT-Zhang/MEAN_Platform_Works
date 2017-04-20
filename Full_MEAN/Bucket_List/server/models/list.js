var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ListSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    _taguser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:"You must choose a taged user!",
    },
    tagname: {type:String},
    title: {
        type: String,
        required: "List's title must be provided.",
        minlength: [5, "List title must be more than 5 characters."]
    },
    description: {
        type: String,
        required:"List's description must be provided.",
        minlength: [10, "List description must be more than 10 characters."],
        },
    checked: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

mongoose.model("List", ListSchema);
