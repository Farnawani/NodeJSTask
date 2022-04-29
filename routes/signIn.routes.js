const express = require("express");
const router = express.Router();
const signInController = require("../controller/signIn.controller");

router.post("/", signInController.signInController);
module.exports = router;
