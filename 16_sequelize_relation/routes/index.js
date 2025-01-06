const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/players", controller.getAllPlayers);
router.get("/players/:id", controller.getPlayer);
router.post("/players", controller.postPlayer);
router.patch("/players/:playerId/team", controller.patchPlayer);
router.delete("/players/:playerId", controller.deletePlayer);
router.get("/teams/:teamId", controller.getTeam);
router.get("/teams/:teamId/players", controller.getTeamPlayers);
module.exports = router;
