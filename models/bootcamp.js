'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    webside: DataTypes.STRING,
    phone: DataTypes.STRING,
    average_rating: DataTypes.DOUBLE,
    average_cost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Bootcamp',
  });
  return Bootcamp;
};