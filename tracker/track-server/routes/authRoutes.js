const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.get("/", userController.requireAuth);

module.exports = router;
