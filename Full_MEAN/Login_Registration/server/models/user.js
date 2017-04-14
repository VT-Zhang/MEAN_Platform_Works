var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email can't be empty"],
        unique: [true, "Email has used, choose another email"]
    },
    first_name: {
        type: String,
        required: [true, "First Name can't be empty"],
        minlength: 2
    },
    last_name: {
        type: String,
        required: [true, "Last Name can't be empty"],
        minlength: 2
    },
    birthday: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password must contain at least 1 number, uppercase and special character"
        }
    }

}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
   }
);

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

UserSchema.pre("save", function(done){
    this.password = this.generateHash(this.password);
    done();
});

mongoose.model("User", UserSchema);
