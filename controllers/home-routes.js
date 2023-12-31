const router = require('express').Router();
const { Season, Spot, Specie } = require('../models');
const newsAPI = require('newsapi')

// GET all season for homepage
router.get('/', async (req, res) => {
  try {
    const dbSeasonData = await Season.findAll();
  
    const seasons = dbSeasonData.map((season) =>
      season.get({ plain: true })
    );
    const news = new newsAPI('4b88cfe067334fcea64575c884088db9');
    await news.v2.topHeadlines({
      category: 'science',
      language: 'en',
      country: 'au',
    })
    .then(response => {
      console.log(response)
    })
    .then((response) => {
// Check if the user is logged in
if (req.session.loggedIn) {

  // Render the season.handlebars template
  res.render('homepage', {
    seasons, response,
    loggedIn: req.session.loggedIn,
  });
} else {
  res.render('homepage', {
    seasons, response,
    loggedIn: req.session.loggedIn,
  });
}
}) 
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
      const dbSeasonData = await Season.findByPk(req.params.id)
      const season = dbSeasonData.get({ plain: true });
      const dbSpotData = await Spot.findAll({
        where: {season_id: parseInt(req.params.id)},
        attributes: {exclude: ['fisher_id']},
        include: [{
          model: Specie
        }]
      });
      const spotPost = dbSpotData.map((item) => item.get({ plain: true }))

      console.log(spotPost)
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
