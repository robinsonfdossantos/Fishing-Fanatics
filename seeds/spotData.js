const { Spot } = require('../models');

const spotData = [
  {
    title: 'Amazon River',
    description: 'located at California/Nevada, United States',
    comments: 'Do not forget take worms', 
    fisher_id: 1,
    specie_id: 2
  },
  {
    title: 'Great Barrier Reef',
    description: 'Beautifull place to enjoy a fishing journey',
    comments: 'Better in Summer but good during whole year', 
    fisher_id: 2,
    specie_id: 4
  }, 
  {
    title: 'Loch Ness',
    description: 'located at Scotland',
    comments: 'Make this an enjoyable trip', 
    fisher_id: 3,
    specie_id: 6
  }
];



const seedSpot = () => Spot.bulkCreate(spotData);

module.exports = seedSpot;
