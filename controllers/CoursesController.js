const { DataTypes } = require("sequelize");
const CourseModel = require('../models/courses');
const sequelize = require('../config/seq');

const Courses = CourseModel(sequelize, DataTypes)
//Listar todos los Courses
    exports.getAllCourses =  async(req , res)=>{
        const allCourses = await Courses.findAll()
        res.status(200).json({"success" : true,"data": allCourses })
    }

//Listar un Course por id
    exports.getSingleCourse = async (req, res)=>{
        const SingleCourse = await Courses.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data" :  SingleCourse})           
    }

//Crear un Course
    exports.createCourse = async(req, res)=>{
        const createCourse = await Courses.create(req.body);
        res.status(201).json({"success" : true,"data": createCourse})
    }
//Actualizar un Course por id
    exports.updateCourse = async(req, res)=>{
        await Courses.update(req.body ,{
            where: {
                id : req.params.id
              }
        });
        const SingleCourse = await Courses.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data": SingleCourse})
    }
//Borrar un Course por id
    exports.deleteCourse = async(req, res)=>{
        await Courses.destroy({
            where: {
              id: req.params.id
            }
          });
          const SingleCourse = await Courses.findByPk(req.params.id)
        res.status(200).json({"success" : true,"data": `El curso de id : ${req.params.id} fue eliminado`})
    }