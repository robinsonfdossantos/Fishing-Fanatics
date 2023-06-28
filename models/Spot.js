const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spot extends Model {}

Spot.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'specie',
        key: 'id',
      },
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'spot',
  }
);


module.exports = Spot;
