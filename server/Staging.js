const multer = require('multer');
const Storage = multer.diskStorage({
    destination: 'temp/',
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({storage: Storage}).array('image');


module.exports = function (req, res, next) {
    console.log('staging', req.body);
    // req.on('close', (err, res) => {
    //     if(err) console.log(err)
    //     else {
    //         console.log('after staging', req.body);
    //         next();
    //     }
    // })
    upload(req, res, err => {
        if (err) console.log(err)
    })
    next();
}