const express =require('express')
const {getAllBootcamps, getBootcamps, getCreateBootcamps, 
        getDeleteBootcamps, getSingleBootcamps, getUpdateBootcamps} = require('../controllers/BoocampController')


const router =express.Router()

router.route('/').get(getAllBootcamps).post(getCreateBootcamps)

router.route('/:id').get(getSingleBootcamps).put(getUpdateBootcamps).delete(getDeleteBootcamps)

module.exports = router