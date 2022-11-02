//1. Crear a depencia de express
const express = require('express');
const {getAllBootcamps,getSingleBootcamp,createBootcamp,updateBootcamp,deleteBootcamp} = require('../Controllers/BootcampController')

const router = express.Router();

router.route('/').get(getAllBootcamps).post(createBootcamp)

router.route('/:id').get(getSingleBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router