const router = require('express').Router();
const feedRoutes = require('./feed-routes');
const dashboardRoutes = require('./dashboard-routes');
const authRoutes = require('./auth-routes');
const apiRoutes = require('./api');

router.use('/', feedRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/authentication', authRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;