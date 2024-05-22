const asyncHandler = require('express-async-handler');

const getTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Tareas'});
})

const crearTareas = asyncHandler( async (req, res) => {
    // console.log(req.body);
    
    if (!req.body.texto) {
        res.status(400)
        throw new Error('Invalid')
//        .json({message: 'No hay texto'}); //
    }
    
    res.status(200).json({message: 'Crear Tarea'});
})

const updateTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Actualizar la tarea con el id: ${req.params.id}`});
})

const deleteTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Eliminar la tarea con el id: ${req.params.id}`});
})

module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}