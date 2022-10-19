//crear la dependecia a expres
const express =require('express')
const clors =require('colors')
const dotenv =require('dotenv')
const listEndpoints =require('express-list-endpoints')
//dependencia a las rutas
const boocampRoutes = require('./routes/BootcamspRoutes')
const cursopRoutes = require('./routes/CursoRoutes')

const app= express()

//relacionar rutas de dominio
app.use('/api/v1/bootcamps', boocampRoutes)
//app.use('/api/v1/cursos', cursopRoutes)

app.get('/', (request, response)=>{
    response.send('ruta funcionando')
})

dotenv.config({
    path: './config/config.env'
})

//listar rutas

console.log(listEndpoints(app))

app.listen(process.env.PORT, ()=>{
    console.log(`servidor iniciado en puerto: ${process.env.PORT}   `.bgGreen.white)
})

