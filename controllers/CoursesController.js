const { DataTypes, ValidationError  } = require("sequelize");
const CourseModel = require('../models/courses');
const sequelize = require('../config/seq');

const Courses = CourseModel(sequelize, DataTypes)

//Listar todos los cursos
exports.getAllCourses =  async(req , res)=>{
    try {
        const allCourses = await Courses.findAll()
        res
        .status(200)
        .json({
            "success" : true,
            "data": allCourses,
        })
    } catch (error) {
        res.status(400).json({
            "succes": false,
            "errors": "Error base de datos"
        })
    }
    
}


//Listar un cursos por id
exports.getSingleCourse = async (req, res)=>{
    try {
        //Seleccionar usuario por id
        const SingleCourse = await Courses.findByPk(req.params.id)
        if (!SingleCourse) {
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
            "data" :  SingleCourse          
        }) 
        }
    } catch (error) {
        res.status(400).json({
            "succes": false,
            "errors": "Error base de datos"
        })
    }          
}

//Crear un curso
exports.createCourse = async(req, res)=>{
    try {
        //Grabar el nuevo curso
        const createCourse = await Courses.create(req.body);
        //Enviar la respuesta con el nuevo curso
        res
        .status(201)
        .json({
            "success" : true,
            "data": createCourse
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

//Actualizar un curso por id
exports.updateCourse = async(req, res)=>{
    try {
        //Seleccionar el curso por id
        const SingleCourse = await Courses.findByPk(req.params.id)
        if (!SingleCourse) {
            res.status(400).json({
                "succes": false,
                "errors": "Error usuario no existente"
            })
        }else{
        //si existe actualizo
        await Courses.update(req.body ,{
            where: {
              id : req.params.id
            }
          });
        }
        //Volvemos a seleccionar
        const updateCourse = await Courses.findByPk(req.params.id)  
        //response con el curso actualizado
        res
        .status(200)
        .json({
            "success" : true,
            "data": updateCourse
        })
        }
    catch (error) {
        res.status(400).json({
            "succes": false,
            "errors": "Error base de datos"
        })
    }
}


// //Borrar un curso por id
// exports.deleteCourse = async(req, res)=>{
//     try {
//         //Seleccionar el curso por id
//         const SingleCourse = await Courses.findByPk(req.params.id)
//         //Si no existe 
//         if (!SingleCourse) {
//             res.status(400).json({
//                 "succes": false,
//                 "errors": "Error curso no existente"
//             })
//         }else{
//         //si existe actualizo
//         await Courses.destroy(req.body ,{
//             where: {
//               id : req.params.id
//             }
//           });
//         }
//         //Volvemos a seleccionar
//         const deleteCourse = await Courses.findByPk(req.params.id)  
//         //response con el usuario actualizado
//         res
//         .status(200)
//         .json({
//             "success" : true,
//             "data": deleteCourse
//         })
//     } catch (error) {
//         res.status(400).json({
//             "succes": false,
//             "errors": "Error base de datos"
//         })
//     }
// }

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