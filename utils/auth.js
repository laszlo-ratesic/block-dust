const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/authentication/sign-in');
    } else {
        next();
    }
};

module.exports = withAuth;