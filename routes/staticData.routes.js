const express = require("express");
const {authenticateToken} = require("../middleware/authentication");
const router = express.Router();
const staticDataController = require("../controller/staticData.controller");

router.get("/", authenticateToken, staticDataController.staticDataController);
module.exports = router;
