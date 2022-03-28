const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    res.render('landing', {loggedIn: req.session.loggedIn});
});


module.exports = router;