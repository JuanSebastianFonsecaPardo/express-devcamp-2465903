exports.getBootcamps=((req, res)=>{
    res.status(200).json({"success" : true, "data" :"todos los bootcamps"})
})

exports.getSingleBootcamps=((req, res)=>{
    res.status(200).json({"success" : true, "data" :`Sibgle bootcamp ${req.params.id}`})
})

exports.getAllBootcamps=((req, res)=>{
    res.status(200).json({"success" : true, "data" :`All bootcamps`})
})

exports.getCreateBootcamps=((req, res)=>{
    res.status(201).json({"success" : true, "data" :`Create bootcamps`})
})

exports.getUpdateBootcamps=((req, res)=>{
    res.status(201).json({"success" : true, "data" :`Update bootcamp ${req.params.id}`})
})

exports.getDeleteBootcamps=((req, res)=>{
    res.status(201).json({"success" : true, "data" :`Delete bootcamp ${req.params.id}`})
})