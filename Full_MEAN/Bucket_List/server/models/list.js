var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ListSchema = new Schema({
    title: {
        type: String,
        required: "List's title must be provided.",
        minlength: 5,
    },
    description: {
        type: String,
        required:"List's description must be provided.",
        minlength: 10,
        },
    checked: {
        type: Boolean,
        default: false,
    },
    users: [{type: Schema.Types.ObjectId, ref: "User"}],
}, {timestamps: true});

mongoose.model("List", ListSchema);
