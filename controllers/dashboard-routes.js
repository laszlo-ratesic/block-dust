const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard', {loggedIn: req.session.loggedIn});
    } else {
        res.redirect('/authentication/sign-in');
    }
    console.log(req.session);
});

module.exports = router;