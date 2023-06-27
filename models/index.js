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

Spot.hasMany(Specie, {
  foreignKey: 'specie_id',
});

Specie.belongsTo(Spot, {
  foreignKey: 'specie_id',
});

Season.hasMany(Spot, {
  foreignKey: 'spot_id',
});

Spot.belongsTo(Season, {
  foreignKey: 'spot_id',
});

module.exports = { Fisher, Spot, Specie, Season };
