const express =require('express')
const {getAllUsers, getUsers, CreateUsers, 
        DeleteUsers, getSingleUsers, UpdateUsers} = require('../controllers/UserController')


const router =express.Router()

router.route('/').get(getAllUsers).post(CreateUsers)

router.route('/:id').get(getSingleUsers).put(UpdateUsers).delete(DeleteUsers)

module.exports = router