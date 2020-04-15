const mongoose = require('mongoose');
const Schema = require('../../models/shopp.model');

Schema.statics = {
    create: function(data, cb) {
        const tienda = new this(data);
        tienda.save(cb);
    }
};
const TiendaModel = mongoose.model('Tienda', Schema);
module.exports = TiendaModel;