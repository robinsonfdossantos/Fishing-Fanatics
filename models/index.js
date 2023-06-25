const Fisher = require('./Fisher');
const Spot = require('./Spot');
const Specie = require('./Specie');
const Season = require('./Season');
const EachSeason = require('./EachSeason');

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

Season.hasMany(EachSeason, {
  foreignKey: 'season_id',
});

EachSeason.belongsTo(Season, {
  foreignKey: 'season_id',
});

EachSeason.hasMany(Spot, {
  foreignKey: 'eachseason_id',
});

Spot.belongsTo(EachSeason, {
  foreignKey: 'eachseason_id',
});

module.exports = { Fisher, Spot, Specie, Season, EachSeason };
