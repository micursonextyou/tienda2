const mongoose = require('mongoose');
const prod = require('../../models/productos.model');

prod.statics = {
    create: function(data, cb) {
        const user = new this(data);
        user.save(cb);
    }
};
const ProductoModel = mongoose.model('Producto', prod);
module.exports = ProductoModel;