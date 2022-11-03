const { DataTypes, ValidationError } = require("sequelize");
const UserModel = require('../models/user');
const sequelize = require('../config/seq');

//Crear un objeto user
const User = UserModel(sequelize, DataTypes)
//Listar todos los bootcamps
    exports.getAllUsers =  async(req , res)=>{
        try {
            const allUsers = await User.findAll()
            res
            .status(200)
            .json({
                "success" : true,
                "data": allUsers,
            })
        } catch (error) {
            res.status(400).json({
                "succes": false,
                "errors": "Error base de datos"
            })
        }
        
    }

//Listar un bootcamp por id
    exports.getSingleUser = async (req, res)=>{
        try {
            //Seleccionar usuario por id
            const SingleUser = await User.findByPk(req.params.id)
            if (!SingleUser) {
                res.status(400).json({
                    "succes": false,
                    "errors": "Error usuario no existente"
                })
            }else{
                //Enviar response
            res
            .status(200)
            .json({
                "success" : true,
                "data" :  SingleUser          
            }) 
            }
        } catch (error) {
            res.status(400).json({
                "succes": false,
                "errors": "Error base de datos"
            })
        }          
    }

//Crear un bootcamp
    exports.createUser = async(req, res)=>{
        try {
            //Grabar el nuevo ususario
            const createUser = await User.create(req.body);
            //Enviar la respuesta con el nuevo usuario
            res
            .status(201)
            .json({
                "success" : true,
                "data": createUser
            })
        }catch (error) {
            if (error instanceof ValidationError ) {
                //Recorrer el arreglo de errores 
                //map
                const msgerrores = error.errors.map(errorItem=>errorItem.message)
                res.status(422).json({
                    "succes": false,
                    "errors": msgerrores
                })
            }else{
                res.status(400).json({
                    "succes": false,
                    "errors": "Error base de datos"
                })
            }
        }
    }
//Actualizar un bootcamp por id
    exports.updateUser = async(req, res)=>{
        try {
            //Seleccionar el usuario por id
            const SingleUser = await User.findByPk(req.params.id)
            //Si no existe 
            if (!SingleUser) {
                res.status(400).json({
                    "succes": false,
                    "errors": "Error usuario no existente"
                })
            }else{
            //si existe actualizo
            await User.update(req.body ,{
                where: {
                  id : req.params.id
                }
              });
            }
            //Volvemos a seleccionar
            const updateUser = await User.findByPk(req.params.id)  
            //response con el usuario actualizado
            res
            .status(200)
            .json({
                "success" : true,
                "data": updateUser
            })
            }
        catch (error) {
            res.status(400).json({
                "succes": false,
                "errors": "Error base de datos"
            })
        }
    }
//Borrar un bootcamp por id
    exports.deleteUser = async(req, res)=>{
        try {
            //Seleccionar el usuario por id
            const SingleUser = await User.findByPk(req.params.id)
            //Si no existe 
            if (!SingleUser) {
                res.status(400).json({
                    "succes": false,
                    "errors": "Error usuario no existente"
                })
            }else{
            //si existe actualizo
            await User.destroy(req.body ,{
                where: {
                  id : req.params.id
                }
              });
            }
            //Volvemos a seleccionar
            const deleteUser = await User.findByPk(req.params.id)  
            //response con el usuario actualizado
            res
            .status(200)
            .json({
                "success" : true,
                "data": deleteUser
            })
        } catch (error) {
            res.status(400).json({
                "succes": false,
                "errors": "Error base de datos"
            })
        }
    }