const sequelize = require('./seq');
const colors = require('colors');

// Componente funcion para 
// Conectarme a la base de datos

const connectDB = async ()=> {
    try{
        await sequelize.authenticate()    
        console.log('Conectado a servidor mysql'.yellow.bgGreen.bold)
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;