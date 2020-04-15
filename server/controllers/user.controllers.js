const User = require('./user.dao');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "A1u5t6o3r4i9z9a3c5i6o2n6";
const bycrypt = require('bcryptjs')
const mongoose = require('mongoose');


exports.createUser = (req, res, next) => {
    const newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
        pai: req.body.pais,
        provincia: req.body.provincia,
        telefono: req.body.telefono,
        f_nacimiento: req.body.f_nacimiento,
        email: req.body.email,
        pass: bycrypt.hashSync(req.body.pass),
        images: req.body.images,
        cfpass: req.body.cfpass,
        facebook: req.body.facebook,
        instagram: req.body.instagram
    }
    User.create(newUser, (err, user) => {

        if (err && err.code === 11000) return res.status(409).send('Email already exists');
        if (err) return res.status(500).send('Server Error');

        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });

        const dataU = {
            name: user.nombre,
            email: user.email,
            acessToken: accessToken,
            expiresIn: expiresIn
        }
        res.send({ dataU });
    });
}

exports.loginUser = (req, res, next) => {
    const data = {
        email: req.body.email,
        pass: req.body.pass
    }

    User.findOne({ email: data.email }).exec((err, userdb) => {
        if (err) return res.status(500).send('Server Error');
        if (!userdb) {
            res.status(409).send({ message: 'Something is worng' });
        } else {
            const resultpassword = bycrypt.compare(data.pass, userdb.pass);
            if (resultpassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: userdb.id }, SECRET_KEY, { expiresIn: expiresIn });
                const dataU = {
                    _id: userdb._id,
                    name: userdb.nombre,
                    email: userdb.email,
                    acessToken: accessToken,
                    expiresIn: expiresIn
                }

                res.send({ dataU });
            } else {
                // pass worng
                res.status(409).send({ message: 'Something is worng' });
            }

        }

    });
}

exports.GeProfielUser = (req, res, next) => {
    let params = req.params;
    console.log(params);
    User.findOne({ _id: mongoose.Types.ObjectId(params.id) }).exec((err, data) => {
        if (err) return res.status(500).send('Server Error');
        res.send(data);

    })

}