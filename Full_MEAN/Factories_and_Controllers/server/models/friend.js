var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FriendSchema = new Schema({
    first_name: {type: String, required: "First name required"},
    last_name: {type: String, required:true},
    dob: {type: Date, required:true}
}, {timestamps:true});
mongoose.model("Friend", FriendSchema);
