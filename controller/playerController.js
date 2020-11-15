const Player = require('../models/player')

module.exports={
    CreatePlayer(req,res){
        res.render("players/new");
    },

    PostPlayer(req,res){
        var player = {
            'name'          : req.sanitize(req.body.player.name),
            'age'           : req.sanitize(req.body.player.age),
            'image'         : req.sanitize(req.body.player.image),
            'position'      : req.sanitize(req.body.player.position)
        }
        Player.create(player, function(err, player) {
            if(err) {
                console.log(err);
            }
         res.redirect("/#team-roster");
        });
    },

    GetPlayer(req,res){
        Player.find({}, function(err, player) {
            if(err) {
                console.log(err);
            }
            res.render("index", {
                player: player
            });
            // res.json(player)
        });
    },


    GetPlayerForUpdate(req,res){
        Player.findById(req.params.id, function(err, player) {
            if(err) {
                console.log(err);
            }
            res.render("players/update", {player: player});
        });
    },

    UpdatePlayer(req,res){
        var player = {
            'name'          : req.sanitize(req.body.player.name),
            'age'           : req.sanitize(req.body.player.age),
            'image'         : req.sanitize(req.body.player.image),
            'position'      : req.sanitize(req.body.player.position)
        }
        Player.findByIdAndUpdate(req.params.id, player, function(err, player) {
            if(err) {
                console.log(err);
            }
            res.redirect("/#team-roster");
        });
    },

    DeletePlayer(req,res){
        Player.findByIdAndRemove(req.params.id, function(err, player) {
            if(err) {
                console.log(err);
            }
            res.redirect("/#team-roster");
        });
    },
}
