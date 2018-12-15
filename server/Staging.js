const multer = require('multer');
// const upload = multer({
//     dest: __dirname + '/temp/'
// })

// const upload = multer({storage: Storage}).array('image');

const storage = multer.diskStorage({
    destination: './temp/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '.png')
    }
})

const upload = multer({
    storage: storage
}).single('image')

module.exports = async function (req, res, next) {
    // console.log('body', req.body);
    console.log('files', req.body, req.files);
    // req.on('close', (err, res) => {
    //     if(err) console.log(err)
    //     else {
    //         console.log('after staging', req.body);
    //         next();
    //     }
    // })
    // upload(req, res, err => {
    //     if (err) console.log(err)
    // })
    // next();
    // req.on('close', (err,res) => {
    //     if(err) console.log(err)
    //     else {
    //         req.files['0'].mv(__dirname + '/temp/' + '0' + '.png', (err) => {
    //             if (err) console.log(err)
    //             else console.log('updated?')
    //             res.end('ok')
    //         })
    //     }
    // })
    
        await new Promise((resolve, reject) => {
            upload(req, res, err => {
            if(err) reject(err)
            else {
                resolve('done')
                // res.send('OK')
                next();
            }
        })})
        
        
}