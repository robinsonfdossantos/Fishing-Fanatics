const router = require('express').Router();
const { Spot, Specie } = require('../models');

// --------------------------------------------------------------------------------
// ****** GET ALL SPOTS ********* REQUIRE LOGIN
router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
  try {
    const spotData = await Spot.findAll({
      include: [{
        model: Specie,
        attributes: ['specie_id', 'specie_name'],
      }],
    });
    res.status(200).json(spotData);
  } catch (err) {
    console.log(err); // Print the error for debugging purposes
    res.status(500).json({ error: 'Failed to retrieve fishing spots' });
  }
}
});

// --------------------------------------------------------------------------------

// ***** GET SPOT BY ID ****** REQUIRE LOGIN
router.get('/spot/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the spots
    try {
      const dbSpotData = await Spot.findByPk(req.params.id, {
        include: [
          {
            model: Specie,
            attributes: [
              'id',
              'name',
            ],
          },
        ],
      });
      const spot = dbSpotData.get({ plain: true });
      res.render('spot', { spot, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// --------------------------------------------------------------------------------

// ****** GET ALL SPECIES ******* REQUIRE LOGIN
router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      const specieData = await Specie.findAll();
      res.status(200).json(fisherData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve species' });
    }
  }
});

// --------------------------------------------------------------------------------

// ******* GET SPECIE BY ID ********** REQUIRE LOGIN
router.get('/specie/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the specie
    try {
      const dbSpecieData = await Specie.findByPk(req.params.id);

      const specie = dbSpecieData.get({ plain: true });

      res.render('specie', { specie, loggedIn: req.session.loggedIn });
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
