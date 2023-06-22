const { Specie } = require('../models');

const specieData = [
  {
    name: 'Tuna',
  },
  {
    name: 'Clownfish',
  },
  {
    name: 'Salmon',
  },
  {
    name: 'Goldfish',
  },
  {
    name: 'Swordfish',
  },
  {
    name: 'Trout',
  },
  {
    name: 'Barracuda',
  },
  {
    name: 'Guppy',
  },
];



const seedSpecie = () => Specie.bulkCreate(specieData);

module.exports = seedSpecie;
