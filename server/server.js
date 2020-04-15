const userRoutes = require('./routes/user.routes');

const express = require('express');
const bodyParse = require('body-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');
const PORT = require('./config/propiertis').PORT;
const DB = require('./config/db');
const multer = require('multer');
const uuid = require('uuid/v4');
const path = require('path');





const bodyParsejson = bodyParse.json();
const bodyParseURLEncode = bodyParse.urlencoded({ extended: true });
// init DB
DB();

// Inisialisacion
var app = express();

//settings
const router = express.Router();
// endPointe
multer.diskStorage({
    filename: (req, file, cb, filename) => {
        cb(null, uuid())
    }
});
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../tienda/src/assets/photos'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});
app.use(multer({ storage: storage }).single('images'));

app.use(express.static(path.join(__dirname, '../tienda/src/assets/photos')));





//      middleware
app.use(bodyParsejson);
app.use(bodyParseURLEncode);

// HEADER CORS


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/api', router);
userRoutes(router);
app.use(router);

// start server 
app.listen(PORT, () => console.log('Server started port : ' + PORT));