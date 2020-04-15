const mongoose = require('mongoose');
const prod = require('../../models/stock_tienda.model');

prod.statics = {
    create: function(data, cb) {
        const user = new this(data);


        user.save(cb);
    }
};
const StockModel = mongoose.model('StockTienda', prod);
module.exports = StockModel;