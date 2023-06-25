const { Season } = require('../models');

const seasondata = [
  {
    id: 1,
    name: 'Spring',
    starting_date: 'April 20, 2021 07:00:00',
    ending_date: 'June 21, 2021 17:00:00',
  },
  {
    id: 2,
    name: 'Summer',
    starting_date: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
  },
  {
    id: 3,
    name: 'Autumn',
    starting_date: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
  },
  {
    id: 4,
    name: 'Winter',
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2021 19:00:00',
  },
];

const seedSeason = () => Season.bulkCreate(seasondata);

module.exports = seedSeason;
