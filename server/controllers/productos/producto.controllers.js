const Producto = require('./producto.dao');


exports.CrearProducto = (req, res, next) => {
    const prod = {
        nombre: req.body.nombre,
        marca: req.body.marca,
        sabor: req.body.sabor,
        tipo: req.body.tipo,
        images: req.body.images,

    }
    Producto.create(prod, (err, prod2) => {
        if (err) return res.status(500).send('Server Error');
        res.send({ prod2 });
    });


}

exports.GetProductos = (req, res, next) => {
    Producto.find((err, allProductos) => {
            if (err) return res.status(500).send('Server Error');
            res.send({ allProductos });
        })
        .populate('images');
}