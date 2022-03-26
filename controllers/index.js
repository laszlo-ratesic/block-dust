const router = require('express').Router();
const landingRoutes = require('./landing-routes');
const dashboardRoutes = require('./dashboard-routes');
const authRoutes = require('./auth-routes');
const apiRoutes = require('./api');
const feedRoutes = require('./feed-routes');

router.use('/', landingRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/feed', feedRoutes);
router.use('/authentication', authRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;