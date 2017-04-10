var mongoose = require("mongoose");

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required:true },
    kind: {type: String, required:true },
    build: {type: String, required:true }
}, {timestamps: true});

var Animal = mongoose.model("Animal", AnimalSchema);
