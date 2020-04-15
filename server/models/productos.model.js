const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({

    //pizza hambuerguesa, cerbesa, tere, condones
    nombre: { type: String, require: true }, //indica si es six pack etc
    marca: { type: String, require: true },
    sabor: { type: String, require: true }, //cola lima limo lupulo cevada gengibre y menta limon naranja uva
    tipo: { type: String, require: true }, //refresco, alchool,comida, jugos
    images: { type: String, require: true }, //imagen por defecto


}, {
    timestamps: true
});
module.exports = productoSchema;