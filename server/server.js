const Express = require('express');
const BodyParser = require('body-parser');
const FormDataParser = require('express-form-data');
// const parseImage = require('') //need to fill this in
// const buildQuery = require ('') //need to fill this in

const App = Express();

App.use(BodyParser.urlencoded({ extended: false}));
App.use(FormDataParser.parse());
App.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    next();
})

App.get('/', (req, res) => {
    console.log('get request');
    res.end('OK');
})

App.post('/', (req, res) => {
    console.log('received req', req.body);
    res.end('OK');
});

App.listen(3000);