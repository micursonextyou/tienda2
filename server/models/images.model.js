const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);


const imgschema = new mongoose.Schema({

    filename: {
        type: String,
        require: true,
        trim: true
    },
    path: {
        type: String,
        require: true
    }

}, {
    timestamps: true
});

module.exports = imgschema;