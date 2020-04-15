const mongoose = require('mongoose');


var KioskoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    direccion: {
        type: String,
        require: true

    },
    telefono: {
        type: String,
        require: true,
        trim: true
    },
    horarios: {
        type: Array,
        require: true

    },
    images: { type: String },
    users: { type: mongoose.Schema.ObjectId, ref: "User" },
	stocktiendas:{ type: mongoose.Schema.ObjectId, ref: "StockTienda" }
}, {
    timestamps: true
});


module.exports = KioskoSchema;