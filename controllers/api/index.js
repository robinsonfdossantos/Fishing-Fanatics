const router = require('express').Router();

const fisherRoutes = require('./fisher-routes');
const specieRoutes = require('./specie-routes');
const spotRoutes = require('./spot-routes');

router.use('/fishers', fisherRoutes);
router.use('/species', specieRoutes);
router.use('/spots', spotRoutes);

module.exports = router;
