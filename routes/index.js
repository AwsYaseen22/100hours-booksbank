const express = require("express");
const router = express.Router();
// protect routes with middle ware
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const indexController = require("../controllers/index");

// if the user is not logged in show him/her the login page and they cannot go to dashboard without loggin in
// change the flow so now the user will go to public books without login
router.get("/", indexController.allBooks);

// Login page
router.get("/login", ensureGuest, indexController.showLogin);

// if the user logged in show him/her the dashboard instead and they cannot go to login page
router.get("/dashboard", ensureAuth, indexController.showDashboard);

module.exports = router;
