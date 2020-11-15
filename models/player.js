var mongoose = require("mongoose");

var playerSchema = mongoose.Schema({
    name: String,
    image: String,
    position: String,
    age: Number
});

module.exports = mongoose.model("players", playerSchema);