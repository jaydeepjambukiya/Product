const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    logoutUser
} = require("../controllers/userControllers");

// REGISTER USER
router.post("/register", registerUser);
// LOGIN USER
router.post("/login", loginUser);
// LOGOUT USER
router.post("/logout", logoutUser);

module.exports = router;