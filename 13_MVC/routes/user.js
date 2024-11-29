const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.getUser);

module.exports = router;
