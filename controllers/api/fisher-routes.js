const router = require('express').Router();
const { Fisher } = require('../../models');

// -----------------------------------------------------------------------------------

// ****** CREATE FISHER ******
router.post('/', async (req, res) => {
  try {
    const dbFisherData = await Fisher.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbFisherData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ******* UPDATE FISHER BY ID ********
router.put('/:fisher_id', async (req, res) => {
  try {
    const fisherData = await Fisher.findByPk(req.params.fisher_id);

    if (!fisherData) {
      res.status(404).json({ message: 'No fisher found with this id!' });
      return;
    }

    await fisherData.update(req.body);  //Update the fisher's name

    res.status(200).json(updatedFisher);
  } catch (err) {
    res.status(400).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ****** DELETE FISHER BY ID *******
router.delete('/:fisher_id', async (req, res) => {
  try {
    const fisherData = await Fisher.destroy({
      where: { id: req.params.fisher_id },
    });

    if (!fisherData) {
      res.status(404).json({ message: 'No fisher found with this id!' });
      return;
    }

    res.status(200).json(fisherData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// -----------------------------------------------------------------------------------

// ****** GET ALL FISHERS *******
router.get('/', async (req, res) => {
  try {
    const fisherData = await Fisher.findAll();
    res.status(200).json(fisherData);
  } catch (err) {
    console.log(err); 
    res.status(500).json({ error: 'Failed to retrieve fishers' });
  }
});

// -----------------------------------------------------------------------------------

// ****** GET FISHERS BY ID *******
router.get('/:fisher_id', async (req, res) => {
  try {
    const fisherData = await Fisher.findByPk(req.params.fisher_id);

    if (!fisherData) {
      res.status(404).json({ message: 'No fisher found with this id!' });
      return;
    }

    res.status(200).json(fisherData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------

// ****** LOGIN *******
router.post('/login', async (req, res) => {
  try {
    const dbFisherData = await Fisher.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbFisherData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again Fishy Friend!' });
      return;
    }

    const validPassword = await dbFisherData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again Fishy friend!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbFisherData, message: 'You are now logged in Pescatarian!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ******* LOGOUT ********
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
