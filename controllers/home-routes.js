const router = require('express').Router();
const { Season, Spot } = require('../models');

// GET all season for homepage
router.get('/', async (req, res) => {
  try {
    const dbSeasonData = await Season.findAll();

    const seasons = dbSeasonData.map((season) =>
      season.get({ plain: true })
    );
    console.log(seasons)
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
}  } catch (err) {
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
      const dbSeasonData = await Season.findByPk(req.params.id)
      const season = dbSeasonData.get({ plain: true });
      const dbSpotData = await Spot.findAll({

        attributes: {exclude: ['fisher_id']},
      });
      const spotPost = dbSpotData.map((item) => item.get({ plain: true }) )
      console.log(spotPost)
      console.log(spotPost.specie_id) 
      res.render('season', { season, spotPost, loggedIn: req.session.loggedIn });
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
