const mongoose = require('mongoose');
const dbURI = require('./propiertis');


module.exports = () => {
    mongoose.connect(dbURI.DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Mongo Conected on "Tere Re"'))
        .catch(err => console.log('Connection has error: ' + err))
    process.on('SiGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongo is Disconnected');
            process.exit(0);
        });

    });
}