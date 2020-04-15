const photoDao = require('./photo.dao');

exports.Upphoto = (req, res) => {
    const img = {
        filename: req.file.filename,
        path: req.file.path
    }
    photoDao.UP(img, (err, image) => {

        if (err) return res.status(500).send('Server Error');
        res.send({ image });
    });
}