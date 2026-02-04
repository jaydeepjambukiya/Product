const express = require("express");
const router = express.Router();
const auth = require("../middieware/auth");
const { getProfile } = require("../controllers/userControllers");
const {
  registerUser,
  loginUser,
  logoutUser,
  changePassword,
} = require("../controllers/userControllers");


// REGISTER USER
router.post("/register", registerUser);
// LOGIN USER
router.post("/login", loginUser);
// LOGOUT USER
router.post("/logout", logoutUser);
// CHANGE PASSWORD
router.put("/change-password", auth, changePassword);
router.get("/profile", auth, getProfile);


module.exports = router;
