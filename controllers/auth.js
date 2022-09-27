const passport = require("passport");

// Auth with google (GET /auth/google)
exports.googleAuth = passport.authenticate("google", { scope: ["profile"] });

// google auth callback (GET /auth/google/callback)
exports.googleCallBack = passport.authenticate("google", {
  failureRedirect: "/",
});
exports.dashboard = (req, res) => {
  res.redirect("/dashboard");
};

// logout user (GET /auth/logout)
exports.logout = (req, res) => {
  // from passport middle ware when login we have the logout in the req automatically
  console.log("logout...");
  req.logOut((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect("/");
  });
};
