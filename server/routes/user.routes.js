const User = require('../controllers/user.controllers');
const Img = require('../controllers/photo/photo.controles');
const Tienda = require('../controllers/tiendas/tienda.controllers');
const Producto = require('../controllers/productos/producto.controllers');
const Stock = require('../controllers/stock_tienda/stock_tienda.controllera');
const Pedidos = require('../controllers/pedidos/pedidos.controllers');

module.exports = (router) => {
    // post  
    router.post('/registro', User.createUser);
    router.post('/login', User.loginUser);
    router.post('/upload', Img.Upphoto);
    router.post('/newkiosco', Tienda.CrearTienda); //private
    router.post('/newproducto', Producto.CrearProducto); //private
    router.post('/newstock', Stock.CrearStock);
    router.post('/newpedido', Pedidos.CrearPedido);

    // gets
    router.get('/getUserProfile/:id', User.GeProfielUser);
    router.get('/stores', Tienda.GetTiendas);
    router.get('/store/:id', Tienda.GetMyTiendas);
    router.get('/products', Producto.GetProductos);
    router.get('/stores_stocks', Stock.Getstock);
    router.get('/stores/:id', Stock.GetstockById);
    router.get('/orders', Pedidos.GetPedidos);
    router.get('/new', Pedidos.GetPedidoOne);



}