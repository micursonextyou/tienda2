const mongoose = require('mongoose');


var itemsPedido = new mongoose.Schema({
    articulo: { type: String, require: true, default: 0 },
    catidad: { type: Number, require: true, default: 0 }
});

var pedidos = new mongoose.Schema({
    users: { type: mongoose.Schema.ObjectId, ref: 'User', require: true },
    stocktiendas: { type: mongoose.Schema.ObjectId, ref: 'StockTienda', require: true },
    items: [itemsPedido],
    importe: {
        type: mongoose.Decimal128,
        require: true,
        default: 0
    }

}, { timestamps: true });
module.exports = pedidos;