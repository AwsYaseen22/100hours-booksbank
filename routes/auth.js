const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

// Auth with google (GET /auth/google)
router.get("/google", authController.googleAuth);
// google auth callback (GET /auth/google/callback)
router.get(
  "/google/callback",
  authController.googleCallBack,
  authController.dashboard
);
// logout user (GET /auth/logout)
router.get("/logout", authController.logout);

module.exports = router;
