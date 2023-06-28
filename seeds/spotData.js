const { Spot } = require('../models');

const spotData = [
  {
    title: 'Amazon River',
    description: 'located at California/Nevada, United States',
    comments: 'Do not forget take worms', 
    location: 'Brazil',
    specie_id: 2
  },
  {
    title: 'Great Barrier Reef',
    description: 'Beautifull place to enjoy a fishing journey',
    comments: 'Better in Summer but good during whole year', 
    location: 'Australia',
    specie_id: 4
  }, 
  {
    title: 'Loch Ness',
    description: 'located at Scotland',
    comments: 'Make this an enjoyable trip', 
    location: 'Scotland',
    specie_id: 6,
  }
];



const seedSpot = () => Spot.bulkCreate(spotData);

module.exports = seedSpot;
