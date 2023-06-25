const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// GET /
router.get('/', (req, res) => {
  res.render('home', { loggedIn: req.session.loggedIn });
});

// GET /login
router.get('/login', (req, res) => {
  res.render('login');
});

// GET /signup
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;

