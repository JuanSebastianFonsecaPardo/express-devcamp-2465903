const express =require('express')
const router =express.Router()

//rutas para boocamps
//listar bootcamps
router.get('/', (req, res)=>{
    res.status(200).json({"success" : true, "data" :"Aqui se van a mostrar todos los bootcamps"})
})


//listar bootcamps por id
router.get('/:id', (req, res)=>{
    res.status(200).json({"success" : true, "data" :`Aqui se va a mostrar el bootcamp cuya id es ${req.params.id}`})
})
//crear bootcamps
router.post('/', (req, res)=>{
    res.status(201).json({"success" : true, "data" :"Aqui se va a crear un nuevo bootcamps"})
})

//actualizar bootcamps
router.put('/:id', (req, res)=>{
    res.status(200).json({"success" : true, "data" :`Aqui se va a arualizar el bootcamp cuya id es ${req.params.id}`})
})

//eliminar bootcamps
router.delete('/:id', (req, res)=>{
    res.status(200).json({"success" : true, "data" :`Aqui se va a eliminar el bootcamp cuya id es ${req.params.id}`})
})

module.exports = router
