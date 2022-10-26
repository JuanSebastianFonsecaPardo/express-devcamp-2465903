//crear la dependecia a expres
const express =require('express')
const clors =require('colors')
const dotenv =require('dotenv')
const connectDB= require('./config/db')
const listEndpoints =require('express-list-endpoints')
//dependencia a las rutas
const boocampRoutes = require('./routes/BootcamspRoutes')
const cursopRoutes = require('./routes/CursoRoutes')
const UsersRoutes = require('./routes/UsersRoutes')

const app= express()

//conectar a base de datos 

connectDB()

//relacionar rutas de dominio
app.use('/api/v1/bootcamps', boocampRoutes)

app.use('/api/v1/cursos', cursopRoutes)

app.use('/api/v1/user', UsersRoutes)

app.get('/', (request, response)=>{
    response.send('ruta funcionando')
})

dotenv.config({
    path: './config/config.env'
})

//listar rutas

console.log(listEndpoints(app))

app.listen(process.env.PORT, ()=>{
    console.log(`servidor iniciado en el puerto: ${process.env.PORT}   `.bgGreen.white)
})

