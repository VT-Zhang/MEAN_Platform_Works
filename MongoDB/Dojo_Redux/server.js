
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.listen(8000, function() {
    console.log("listening on port 8000");
})

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 3}
}, {timestamps: true})

mongoose.model("User", UserSchema);
var User = mongoose.model("User");
mongoose.Promise = global.Promise

// Routes
app.get('/', function(req, res) {
    res.render('index');
})
app.get('/quotes', function(req, res){
    User.find({}).sort({createdAt: 'desc'}).exec(function(err, users){
        if(err){
            console.log(err);
        }
        console.log(users);
        res.render('quotes', {users});
    })
})
app.post('/quotes', function(req, res){
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, quote: req.body.quote});
    user.save(function(err){
        if(err){
            res.render("index", {title: "You have following errors: ", errors: user.errors})
        }
        else{
            res.redirect("/quotes");
        }
    });
})
