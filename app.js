const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


//routes
app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/eightnine", function(req,res){
    res.render("eightnine.ejs");
});

app.get("/goldenage", function(req,res){
    res.render("goldenage.ejs");
});

app.get("/twothousands", function(req,res){
    res.render("twothousands.ejs");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Express is running");
});