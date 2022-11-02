const { DataTypes } = require("sequelize");
const UserModel = require('../models/user');
const sequelize = require('../config/seq');

//Crear un objeto user
const User = UserModel(sequelize, DataTypes)
//Listar todos los bootcamps
    exports.getAllUsers =  async(req , res)=>{
        const allUsers = await User.findAll()
        res
        .status(200)
        .json({
            "success" : true,
            "data": allUsers
        })
    }

//Listar un bootcamp por id
    exports.getSingleUser = async (req, res)=>{
        const SingleUser = await User.findByPk(req.params.id)
        res
        .status(200)
        .json({
            "success" : true,
            "data" :  SingleUser          
        })           
    }

//Crear un bootcamp
    exports.createUser = async(req, res)=>{
        const createUser = await User.create(req.body);
        res
        .status(201)
        .json({
            "success" : true,
            "data": createUser
        })
    }
//Actualizar un bootcamp por id
    exports.updateUser = async(req, res)=>{
        await User.update(req.body ,{
        where: {
          id : req.params.id
        }
      });
      const SingleUser = await User.findByPk(req.params.id)
      res
        .status(200)
        .json({
            "success" : true,
            "data": SingleUser
        })
    }
//Borrar un bootcamp por id
    exports.deleteUser = async(req, res)=>{
        await User.destroy({
            where: {
              id: req.params.id
            }
          });
          const SingleUser = await User.findByPk(req.params.id)
        res
        .status(200)
        .json({
            "success" : true,
            "data": `El usuario de id : ${req.params.id} fue borrado`
        })
    }