const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);



var UserSchema = new mongoose.Schema({

    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apellido: {
        type: String,
        require: true,
        trim: true
    },
    dni: {
        type: mongoose.Decimal128,
        require: true

    },
    direccion: {
        type: String,
        require: true,

    },
    departamento: {
        type: String,
        require: true,
        trim: true
    },
    localidad: {
        type: String,
        require: true,
        trim: true
    },
    provincia: {
        type: String,
        require: true,
        trim: true
    },
    telefono: {
        type: String,
        require: true,

    },

    f_nacimiento: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    pass: {
        type: String,
        require: true,
        trim: true
    },

    images: { type: String },
    cfpass: {
        type: String,
        require: true,
        trim: true
    },
    facebook: {
        type: String,
        require: true,
        trim: true
    },
    instagram: {
        type: String,
        require: true,
        trim: true
    }

}, {
    timestamps: true
});

// Event



module.exports = UserSchema;