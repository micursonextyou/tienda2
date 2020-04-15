const mongoose = require('mongoose');
const Schema = require('../models/user.model');

Schema.statics = {
    create: function(data, cb) {
        const user = new this(data);

        user.save(cb);
    },
    login: function(query, cb) {
        this.findOne(query, cb);
    }
};
const AuthModel = mongoose.model('User', Schema);
module.exports = AuthModel;