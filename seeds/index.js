const sequelize = require('../config/connection');
const seedFisher = require('./fisherData');
const seedSpecie = require('./specieData');
const seedSpot = require('./spotData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFisher();
  await seedSpecie();
  await seedSpot();

  process.exit(0);
};

seedAll();
