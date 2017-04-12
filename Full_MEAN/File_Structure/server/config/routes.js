console.log("Future Routes..");

var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(process.env["root"], "client/index.html"));
    })
}
