const sequelize= require('./seq')
const colors= require('colors')

//funcion para conectarse a la base de datos

const connectDB= async ()=>{
    try {
        await sequelize.authenticate()
        console.log('Conectado al servidor mysql'.bgGreen.white)

    } catch (error) {
        console.log(error)
    }
    
}

module.exports = connectDB