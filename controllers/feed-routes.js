const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    res.render('feed', { loggedIn: req.session.loggedIn });
    console.log(req.session);
});

module.exports = router;