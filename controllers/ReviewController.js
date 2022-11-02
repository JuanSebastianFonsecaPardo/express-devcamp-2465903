const { DataTypes } = require("sequelize");
const ReviewModel = require('../models/reviews');
const sequelize = require('../config/seq');

const Reviews = ReviewModel(sequelize, DataTypes)
//Listar todos los Reviews
    exports.getAllReviews =  async(req , res)=>{
        const allReviews = await Reviews.findAll()
        res.status(200).json({"success" : true,"data": allReviews })
    }

//Listar un Review por id
    exports.getSingleReview = async (req, res)=>{
        const SingleReview = await Reviews.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data" :  SingleReview})           
    }

//Crear un Review
    exports.createReview = async(req, res)=>{
        const createReview = await Reviews.create(req.body);
        res.status(201).json({"success" : true,"data": createReview})
    }
//Actualizar un Review por id
    exports.updateReview = async(req, res)=>{
        await Reviews.update(req.body ,{
            where: {
                id : req.params.id
              }
        });
        const SingleReview = await Reviews.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data": SingleReview})
    }
//Borrar un Review por id
    exports.deleteReview = async(req, res)=>{
        await Reviews.destroy({
            where: {
              id: req.params.id
            }
          });
          const SingleReview = await Reviews.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data": `El curso de id : ${req.params.id} fue eliminado`})
    }