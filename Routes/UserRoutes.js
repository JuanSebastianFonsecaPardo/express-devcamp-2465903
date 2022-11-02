//1. Crear a depencia de express
const express = require('express');
const {getAllUsers,getSingleUser,createUser,updateUser,deleteUser} = require ('../Controllers/UserController')

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser)

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router