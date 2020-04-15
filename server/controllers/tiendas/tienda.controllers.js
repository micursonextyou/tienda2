const Tienda = require('./tienda.dao');
const mongoose = require('mongoose');


exports.CrearTienda = (req, res, next) => {
    const tienda = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        horarios: req.body.horarios,
        images: req.body.images,
        users: req.body.users,
        stocktiendas: req.body.stocktiendas
    }
    Tienda.create(tienda, (err, tienda2) => {
        console.log(tienda);
        if (err) return res.status(500).send('Server Error');
        res.send({ tienda2 });
    });
}

exports.GetTiendas = (req, res, next) => {
    Tienda.find((err, allKioscos) => {
            if (err) return res.status(500).send('Server Error');
            res.send(allKioscos);
        })
        .populate({ path: 'stocktiendas', select: 'lista.descripcion' });
}



exports.GetMyTiendas = (req, res, next) => {
    let params = req.params;

    Tienda.findOne({ _id: mongoose.Types.ObjectId(params.id) }).populate('stocktiendas').populate('users').exec((err, data) => {
        if (err) return res.status(500).send('Server Error');
        res.send(data);

    });
}