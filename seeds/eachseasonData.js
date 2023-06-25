const { EachSeason } = require('../models');

const eachseasondata = [
  {
    title: 'Spring',
    season_id: 1,
    filename: '02-spring-fishing.jpg',
    spot_id: 1,
  },
  {
    title: 'Summer',
    season_id: 2,
    filename: '03-summer-fishing.jpg',
    spot_id: 2,
  },
  {
    title: 'Autumn',
    season_id: 3,
    filename: '01-autumn-fishing.jpg',
    spot_id: 3,
  },
  {
    title: 'Winter',
    season_id: 4,
    filename: '04-winter-fishing.jpg',
    spot_id: 1,
  },
];

const seedEachSeason = () => EachSeason.bulkCreate(eachseasondata);

module.exports = seedEachSeason;
