const router = require('express').Router();
const { Season } = require('../../models');

// ****** GET ALL SEASONS *******
router.get('/', async (req, res) => {
  try {
    const seasonData = await Season.findAll();
    res.status(200).json(seasonData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to retrieve season' });
  }
});


// GET one season
router.get('/:season_id', async (req, res) => {
  try {
    const seasonData = await Season.findByPk(req.params.season_id);

    if (!seasonData) {
      res.status(404).json({ message: 'No season found with this id!' });
      return;
    }

    res.status(200).json(seasonData);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
