const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
  console.log(req.session);

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
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
  .then((dbPostData) => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('feed', { posts, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
      res.render('error-500');
  })
});

module.exports = router;
