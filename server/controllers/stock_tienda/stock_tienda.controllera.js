const Stock = require('./stock_tienda.dao');
const mongoose = require('mongoose');


exports.CrearStock = (req, res, next) => {
    const stock = {

        lista: req.body.lista
    }


    Stock.create(stock, (err, stock2) => {
        if (err) return res.status(500).send('Server Error');
        res.send({ stock2 });
    });


}

exports.Getstock = (req, res, next) => {
    Stock.find((err, allstock) => {
            if (err) return res.status(500).send('Server Error');
            res.send(allstock);

        })
        .populate('tiendas').populate({
            path: 'tiendas.images',
            populate: 'images'
        }).populate({
            path: 'lista.productos',
            populate: {
                path: 'productos',
                select: 'nombre'
            }

        });
}
exports.GetstockById = (req, res, next) => {
    let params = req.params;
    Stock.findOne({ _id: mongoose.Types.ObjectId(params.id) }).populate('tiendas').populate({
        path: 'lista.productos',
        populate: { path: 'productos', select }

    }).exec((err, data) => {
        if (err) return res.status(500).send('Server Error');
        res.send(data);
    });
}