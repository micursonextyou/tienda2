const mongoose = require('mongoose');
const pedido = require('../../models/pedidos.model');

pedido.statics = {
    create: function(data, cb) {
        const user = new this(data);
        user.save(cb);
    }
};
const PedidoModel = mongoose.model('Pedido', pedido);
module.exports = PedidoModel;