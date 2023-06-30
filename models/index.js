const Fisher = require('./Fisher');
const Spot = require('./Spot');
const Specie = require('./Specie');
const Season = require('./Season');

Spot.hasMany(Fisher, {
  foreignKey: 'fisher_id',
});

Fisher.belongsTo(Spot, {
  foreignKey: 'fisher_id',
});

Spot.belongsTo(Specie, {
  foreignKey: 'specie_id',
});

Specie.hasMany(Spot, {
  foreignKey: 'specie_id',
});

Season.hasMany(Spot, {
  foreignKey: 'season_id',
});

Spot.belongsTo(Season, {
  foreignKey: 'season_id',
});

module.exports = { Fisher, Spot, Specie, Season };
