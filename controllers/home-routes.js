const router = require('express').Router();
const { Season, EachSeason } = require('../models');

// GET all season for homepage
router.get('/', async (req, res) => {
  try {
    const dbSeasonData = await Season.findAll({
      include: [
        {
          model: EachSeason,
          attributes: ['filename'],
        },
      ],
    });

    const seasons = dbSeasonData.map((season) =>
      season.get({ plain: true })
    );

// Check if the user is logged in
if (req.session.loggedIn) {
  // Render the season.handlebars template
  res.render('homepage', {
    seasons,
    loggedIn: req.session.loggedIn,
  });
} else {
  res.render('homepage', {
    seasons,
    loggedIn: req.session.loggedIn,
  });
}

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one season
router.get('/season/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the season
    try {
      const dbSeasonData = await Season.findByPk(req.params.id, {
        include: [
          {
            model: EachSeason,
            attributes: ['filename', 'spot_id'],
          },
        ],
      });
      const season = dbSeasonData.get({ plain: true });
      res.render('season', { season, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one spot
router.get('/eachseason/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbEachSeasonData = await EachSeason.findByPk(req.params.id);

      const eachseason = dbEachSeasonData.get({ plain: true });

      res.render('eachseson', { eachseason, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
