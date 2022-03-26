const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
// const withAuth = require('../utils/auth')

// DISPLAYS SIGN-IN PAGE
router.get("/sign-in", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("sign-in");
});

// DISPLAYS SIGN-UP PAGE
router.get("/sign-up", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("sign-up");
});

router.get("/sign-out", (req, res) => {
    if (req.session.loggedIn === false) {
      res.redirect("/");
      return;
    }

  res.render("sign-out");
});

router.get("/forgot-password", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("forgot-password");
});

router.get("/reset-password", (req, res) => {
  //   if (req.session.loggedIn === false) {
  //     res.redirect("/");
  //     return;
  //   }

  res.render("reset-password");
});

router.get("/lock-screen", (req, res) => {
//   if (!req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

  res.render("lock-screen");
});
module.exports = router;
