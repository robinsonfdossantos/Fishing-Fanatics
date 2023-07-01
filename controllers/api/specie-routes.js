const router = require('express').Router();
const { Specie } = require('../../models');
const { route } = require('./specie-routes');

// -----------------------------------------------------------------------------------

// ****** CREATE SPECIE ******
router.post('/', async (req, res) => {
  try {
    const dbSpecieData = await Specie.create({
      name: req.body.name,
    });
    console.log(dbSpecieData); 

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbSpecieData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// -----------------------------------------------------------------------------------

// ******* UPDATE SPECIE BY ID ********
router.put('/:specie_id', async (req, res) => {
  try {
    const specieData = await Specie.findByPk(req.params.specie_id);

    if (!specieData) {
      res.status(404).json({ message: 'No specie found with this id!' });
      return;
    }

    await specieData.update(req.body);  //Update the specie's name

    res.status(200).json(updatedSpecie);
  } catch (err) {
    res.status(400).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ****** DELETE SPECIE BY ID *******
router.delete('/:specie_id', async (req, res) => {
  try {
    const specieData = await Fisher.destroy({
      where: { id: req.params.specie_id },
    });

    if (!specieData) {
      res.status(404).json({ message: 'No specie found with this id!' });
      return;
    }

    res.status(200).json(specieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ****** GET ALL SPECIES *******
router.get('/', async (req, res) => {
  try {
    const specieData = await Specie.findAll();
    res.status(200).json(specieData);
  } catch (err) {
    console.log(err); 
    res.status(500).json({ error: 'Failed to retrieve species' });
  }
});

// -----------------------------------------------------------------------------------

// ****** GET SPECIES BY ID *******
router.get('/:specie_id', async (req, res) => {
  try {
    const specieData = await Specie.findByPk(req.params.specie_id);

    if (!specieData) {
      res.status(404).json({ message: 'No specie found with this id!' });
      return;
    }

    res.status(200).json(specieData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Route to fetch species data
router.get('/api/species', async (req, res) => {
  try {
    const species = await Specie.findAll({
      attributes: ['id', 'name'],
    });
    res.json(species);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
