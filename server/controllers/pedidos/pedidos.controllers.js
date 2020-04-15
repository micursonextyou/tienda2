const mongoose = require('mongoose');
const Pedido = require('./pedidos.dao');
const Stock = require('../stock_tienda/stock_tienda.dao');


exports.CrearPedido = (req, res, next) => {
    var new_cantidad = 0;
    const pedido = {
            users: req.body.users,
            stocktiendas: req.body.stocktiendas,
            items: req.body.items,
            importe: req.body.importe
        }
        /* {"cliente": "", "producto":"" ,"catidad":""}  */
    Pedido.create(pedido, (err, pedido2) => {
        if (err) return res.status(500).send('Server Error');
        res.send({ pedido2 });
    });
    Stock.findOne({ _id: mongoose.Types.ObjectId(pedido.stocktiendas) }).then((stock) => {
        for (let i = 0; i < stock.lista.length; i++) {
            if (stock.lista[i]._id == pedido.articulo) {
                stock.lista[i].cantidad = stock.lista[i].cantidad - parseInt(pedido.catidad);
                stock.save();
            }
        }

    });


}

exports.GetPedidos = (req, res, next) => {
    Pedido.find((err, allPedido) => {
            if (err) return res.status(500).send('Server Error');
            res.send({ allPedido });

        })
        .populate('users').populate('stocktiendas');



}

exports.GetPedidoOne = (req, res, netx) => {

    Stock.find().distinct("lista", function(error, results) {

        for (let i = 0; i < results.length; i++) {
            console.log("recorriendo");

            if (results[i]._id == "5e35e218f4e09e09c8555a47") {
                console.log("evauado");

                console.log(results[i]);
            }
        }

    });

}