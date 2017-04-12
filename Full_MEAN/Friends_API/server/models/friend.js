var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FriendSchema = new Schema({
    first_name: {type: String, required:true},
    last_name: {type: String, required:true},
    dob: {type: Date, required:true}
}, {timestamps:true});
var Friend = mongoose.model("Friend", FriendSchema);
