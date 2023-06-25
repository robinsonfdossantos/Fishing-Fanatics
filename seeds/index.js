const sequelize = require('../config/connection');
const seedFisher = require('./fisherData');
const seedSpecie = require('./specieData');
const seedSeason = require('./seasonData');
const seedSpot = require('./spotData');
const seedEachSeason = require('./eachseasonData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFisher();
  await seedSpecie();
  await seedSeason();
  await seedSpot();
  await seedEachSeason();

  process.exit(0);
};

seedAll();
