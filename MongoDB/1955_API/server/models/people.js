var mongoose = require("mongoose");

var PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, {timestamps: true});

var People = mongoose.model("People", PeopleSchema);
