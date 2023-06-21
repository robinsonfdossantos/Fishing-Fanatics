const sequelize = require('../config/connection');
const seedFisher = require('./fisherData');
//const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFisher();

 // await seedPaintings();

  process.exit(0);
};

seedAll();
