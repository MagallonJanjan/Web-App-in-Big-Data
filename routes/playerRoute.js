const express = require('express');
const router = express.Router();

const PLAYER = require('../controller/playerController')

router.get("/",PLAYER.GetPlayer)
router.post("/players",PLAYER.PostPlayer)
router.get("/players/new",PLAYER.CreatePlayer)
router.get("/player/:id/update",PLAYER.GetPlayerForUpdate)
router.post("/players/:id",PLAYER.UpdatePlayer)
router.delete("/player/:id",PLAYER.DeletePlayer)
router.post("/players",PLAYER.PostPlayer)

module.exports = router