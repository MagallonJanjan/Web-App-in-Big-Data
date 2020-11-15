    express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    app = express();


app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/basketball-team");


const playerRoute = require('./routes/playerRoute')
app.use(playerRoute)



// 404 NOT FOUND
app.get("*", function (req, res) {
    res.send("Error 404");
});

// SERVER
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started at port 3000");
})
