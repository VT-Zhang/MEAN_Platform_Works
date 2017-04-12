var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

process.env["root"] = __dirname;

require(path.join(process.env["root"], "/server/config/mongoose.js"));
require("./server/config/routes.js"))(app);

app.listen(8000, function(){
    console.log("Listening on port 8000.");
})
