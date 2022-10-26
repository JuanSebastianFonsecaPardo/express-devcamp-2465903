const { DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')

const User = UserModel(sequelize, DataTypes)

exports.getUsers= async((req, res)=>{
    const allUsers =await User.findAll()
    res.status(200).json({"success" : true, "data" :allUsers})
})

exports.getSingleUsers=((req, res)=>{
    res.status(200).json({"success" : true, "data" :`Sibgle user ${req.params.id}`})
})

exports.getAllUsers=((req, res)=>{
    res.status(200).json({"success" : true, "data" :`All Users`})
})

exports.CreateUsers=((req, res)=>{
    res.status(201).json({"success" : true, "data" :`Create Users`})
})

exports.UpdateUsers=((req, res)=>{
    res.status(201).json({"success" : true, "data" :`Update user ${req.params.id}`})
})

exports.DeleteUsers=((req, res)=>{
    res.status(201).json({"success" : true, "data" :`Delete user ${req.params.id}`})
})