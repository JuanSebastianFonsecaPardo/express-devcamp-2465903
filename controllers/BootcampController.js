const { DataTypes } = require("sequelize");
const BootcampModel = require('../models/bootcamps');
const sequelize = require('../config/seq');

const Bootcamps = BootcampModel(sequelize, DataTypes)
//Listar todos los bootcamps
    exports.getAllBootcamps =  async(req , res)=>{
        const allBootcamps = await Bootcamps.findAll()
        res.status(200).json({"success" : true,"data": allBootcamps })
    }

//Listar un bootcamp por id
    exports.getSingleBootcamp = async (req, res)=>{
        const SingleBootcamp = await Bootcamps.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data" :  SingleBootcamp})           
    }

//Crear un bootcamp
    exports.createBootcamp = async(req, res)=>{
        const createBootcamp = await Bootcamps.create(req.body);
        res.status(201).json({"success" : true,"data": createBootcamp})
    }
//Actualizar un bootcamp por id
    exports.updateBootcamp = async(req, res)=>{
        await Bootcamps.update(req.body ,{
            where: {
                id : req.params.id
              }
        });
        const SingleBootcamp = await Bootcamps.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data": SingleBootcamp})
    }
//Borrar un bootcamp por id
    exports.deleteBootcamp = async(req, res)=>{
        await Bootcamps.destroy({
            where: {
              id: req.params.id
            }
          });
          const SingleBootcamp = await Bootcamps.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data": `El bootcamp de id : ${req.params.id} fue borrado`})
    }