const router = require('express').Router();
const { Spot } = require('../../models');

// -----------------------------------------------------------------------------------

// ****** CREATE SPOT******
router.post('/', async (req, res) => {
  try {
    const dbSpotData = await Spot.create({
      title: req.body.title,
      description: req.body.description,
      comments: req.body.comments,
      location: req.body.location,
      specie_id: req.body.specie_id,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbSpotData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ******* UPDATE SPOT BY ID ********
router.put('/:spot_id', async (req, res) => {
  try {
    const spotData = await Spot.findByPk(req.params.spot_id);

    if (!spotData) {
      res.status(404).json({ message: 'No spot found with this id!' });
      return;
    }

    await spotData.update(req.body);  //Update the spot's name

    res.status(200).json(updatedSpot);
  } catch (err) {
    res.status(400).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ****** DELETE SPOT BY ID *******
router.delete('/:spot_id', async (req, res) => {
  try {
    const spotData = await Spot.destroy({
      where: { id: req.params.spot_id },
    });

    if (!spotData) {
      res.status(404).json({ message: 'No spot found with this id!' });
      return;
    }

    res.status(200).json(spotData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ****** GET ALL SPOTS *******
router.get('/', async (req, res) => {
  try {
    const spotData = await Spot.findAll();
    res.status(200).json(spotData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to retrieve spots' });
  }
});

// -----------------------------------------------------------------------------------

// ****** GET SPOT BY ID *******
router.get('/:spot_id', async (req, res) => {
  try {
    const spotData = await Spot.findByPk(req.params.spot_id);

    if (!spotData) {
      res.status(404).json({ message: 'No spot found with this id!' });
      return;
    }

    res.status(200).json(spotData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
