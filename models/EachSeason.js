const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EachSeason extends Model {}

EachSeason.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'season',
        key: 'id',
      },
    },
    spot_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'spot',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'eachseason',
  }
);

module.exports = EachSeason;
