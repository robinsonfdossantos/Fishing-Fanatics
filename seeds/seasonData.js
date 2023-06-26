const { Season } = require('../models');

const seasondata = [
  {
    id: 1,
    name: 'Spring',
    filename: '02-spring-fishing.jpg',
  },
  {
    id: 2,
    name: 'Summer',
    filename: '03-summer-fishing.jpg',
  },
  {
    id: 3,
    name: 'Autumn',
    filename: '01-autumn-fishing.jpg',
  },
  {
    id: 4,
    name: 'Winter',
    filename: '04-winter-fishing.jpg',
  },
];

const seedSeason = () => Season.bulkCreate(seasondata);

module.exports = seedSeason;
