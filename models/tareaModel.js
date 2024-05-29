const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Porfavor selecciona un usuario"]
    },
    texto: {
        type: String,
        required: [true, "Porfa teclea el texto de la tarea"]
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Tarea', tareaSchema);