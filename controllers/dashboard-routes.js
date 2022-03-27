const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        Post.findAll({
          attributes: ['id', 'title', 'post_text', 'created_at'],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username'],
              },
            },
          ],
        })
        .then((dbPostData) => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: req.session.loggedIn, id: req.session.user_id });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
            res.render('error-500');
        })
    } else {
        res.redirect('/authentication/sign-in');
    }
  });

module.exports = router;