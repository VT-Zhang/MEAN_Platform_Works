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
mongoose.connect('mongodb://localhost/animal');

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required:true },
    kind: {type: String, required:true },
    build: {type: String, required:true }
}, {timestamps: true})

mongoose.model("Animal", AnimalSchema)
var Animal = mongoose.model("Animal");
mongoose.Promise = global.Promise

app.get("/", function(req, res){
    Animal.find({}, function(err, animals){
        if(err){
            console.log(err);
        }
        console.log(animals);
        res.render("index", {animals});
    })
})

app.get("/mongooses/new", function(req, res){
    res.render("new");
})

app.post("/mongooses", function(req, res){
    console.log("Data from the FORM: ", req.body);
    var animal = new Animal({name: req.body.name, kind: req.body.kind, build: req.body.build});
    animal.save(function(err){
        if(err){
            res.render("new", {errors: animal.errors})
        }
        else{
            res.redirect("/");
        }
    });
})

app.get("/mongooses/edit/:id", function(req, res){
    Animal.findOne({_id:req.params.id}, function(err, animal){
        res.render("edit", {animal});
    });
})

app.post("/mongooses/:id", function(req, res){
    Animal.findOne({_id:req.params.id}, function(err, animal){
        animal.name = req.body.name;
        animal.kind = req.body.kind;
        animal.build = req.body.build;
        animal.save(function(err){
            if(err){
                res.render("edit", {errors: animal.errors})
            }
            else{
                res.redirect("/");
            }
        });
    });
})

app.post("/mongooses/destroy/:id", function(req, res){
    Animal.findOne({_id:req.params.id}, function(err, animal){
        animal.remove();
        res.redirect("/");
    });
})
