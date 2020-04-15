const mongoose = require('mongoose');
const Schema = require('../../models/images.model');

Schema.statics = {
    UP: function(data, cb) {
        const img = new this(data);

        img.save(cb);
    },

};
const ImgModel = mongoose.model('Image', Schema);
module.exports = ImgModel;