const express =require('express')
const router =express.Router()

//rutas para boocamps
//listar cursos
router.get('/', (req, res)=>{
    res.status(200).json({"success" : true, "data" :"Aqui se van a mostrar todos los cursos"})
})


//listar cursos por id
router.get('/:id', (req, res)=>{
    res.status(200).json({"success" : true, "data" :`Aqui se va a mostrar el curso cuyo id es ${req.params.id}`})
})
//crear cursos
router.post('/', (req, res)=>{
    res.status(201).json({"success" : true, "data" :"Aqui se va a crear un nuevo curso"})
})

//actualizar cursos
router.put('/:id', (req, res)=>{
    res.status(200).json({"success" : true, "data" :`Aqui se va a arualizar el curso cuya id es ${req.params.id}`})
})

//eliminar cursos
router.delete('/:id', (req, res)=>{
    res.status(200).json({"success" : true, "data" :`Aqui se va a eliminar el curso cuya id es ${req.params.id}`})
})

module.exports = router