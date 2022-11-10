'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    //Titulo
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg:"El titulo debe tener solo letras"
        },
        notNull: {
          args: true,
          msg:"El titulo no esta presente"
        },
        notEmpty: {
          args: true,
          msg:"El titulo no debe estar vacio"
        }
      }
    },
    //Descripcion
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg:"El Descripcion debe tener solo letras"
        },
        notNull: {
          args: true,
          msg:"El Descripcion no esta presente"
        },
        notEmpty: {
          args: true,
          msg:"El Descripcion no debe estar vacio"
        }
      }
    },
    //Semanas
    weeks:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric: {
          args: true,
          msg:"las Semanas tener solo numeros"
        },
        max:{
          args: 1,
          msg:"las semanas tiene un maximo de 1 digitos"
        },
        min: {
          args: 1,
          msg:"las semanas debe tener al menos 1 digito"
        },
        notNull: {
          args: true,
          msg:"el numero de Semanas no esta presente"
        },
        notEmpty: {
          args: true,
          msg:"las Semanas no debe estar vacio"
        }
      }
    },
    //Costo
    enroll_cost:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isFloat: {
          args: true,
          msg:"El Costo debe tener solo numeros"
        },
        notNull: {
          args: true,
          msg:"El Costo no esta presente"
        },
        notEmpty: {
          args: true,
          msg:"El Costo no debe estar vacio"
        }
      }
    },
    //Habilidades
    minimun_skill:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg:"La habilidades debe tener solo letras"
        },
        notNull: {
          args: true,
          msg:"las habilidades no esta presente"
        },
        notEmpty: {
          args: true,
          msg:"las habilidades no debe estar vacio"
        }
      }
    },
    //Bootcamp
    bootcamp_id:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric: {
          args: true,
          msg:"El Bootcamp_id debe tener solo numeros"
        },
        notNull: {
          args: true,
          msg:"El Bootcamp_id no esta presente"
        },
        notEmpty: {
          args: true,
          msg:"El Bootcamp_id no debe estar vacio"
        }
      }
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Courses',
  });
  return Courses;
};