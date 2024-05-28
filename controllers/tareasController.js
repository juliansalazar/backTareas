const asyncHandler = require('express-async-handler');
const Tarea = require('../models/tareaModel.js');
const getTareas = asyncHandler( async (req, res) => {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
})
const crearTareas = asyncHandler( async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error('Invalid')
//        .json({message: 'No hay texto'}); //
    }
    const tarea = await Tarea.create({
        texto: req.body.texto
    });
    res.status(201).json(tarea);
})
const updateTareas = asyncHandler( async (req, res) => {
    const tarea = await Tarea.findById(req.params.id);
    if(!tarea){
        res.status(404)
        throw new Error('Tarea not found')
    }
    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!tareaUpdated){
        res.status(404)
        throw new Error('Tarea not found')
    }
    res.status(200).json(tareaUpdated)
})
const deleteTareas = asyncHandler( async (req, res) => {
    const tarea = await Tarea.findById(req.params.id);
    if(!tarea){
        res.status(404)
        throw new Error('Tarea not found')
    }
    const tareaEliminada = await Tarea.findOneAndDelete(req.params.id)
    res.status(200).json(tareaEliminada)
//    res.status(200).json({message: `Eliminar la tarea con el id: ${req.params.id}`});
})
module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}