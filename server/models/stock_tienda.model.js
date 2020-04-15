const mongoose = require('mongoose');

const productoStock = new mongoose.Schema({
    productos: { type: mongoose.Schema.ObjectId, ref: 'Producto' },
    descripcion: { type: String, require: true }, // sis ene una hamburguesa doble carne
    ingredientes: { type: Array, require: true }, // coron coca-cola buwaiser prime camaleon manaos,

    cantidad: { type: Number, require: true, default: 0 },
    precio: { type: Number, require: true, default: 0 },
    images: { type: String, require: true, default: 0 } //imagen por el usuario
});

const Stock = new mongoose.Schema({
    tiendas: { type: mongoose.Schema.ObjectId, ref: 'Tienda' },
    lista: [productoStock]

}, { timestamps: true });

/*
    { tienda: "5e349b8b7360781cc8bf0e6b",
    productos: [
        {"producto":"5e349b8b7360781cc8bf0e6b","cantidad":"50","precio":"120"},
        {"producto":"5e357807abe4b121b4c47cfe","cantidad":"20","precio":"95"},
        {"producto":"5e35781eabe4b121b4c47cff","cantidad":"10","precio":"80"},
        {"Producto:" "5e35795cabe4b121b4c47d05","cantidad":"10","precio":"200"},
        {"Producto:" "5e35792aabe4b121b4c47d04","cantidad":"10","precio":"250"},
        {"Producto:" "5e357a66d7a60611d8a121d5","cantidad":"10","precio":"230"}]}

    
*/
module.exports = Stock;