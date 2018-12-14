const Express = require('express');
const parseImage = require('') //need to fill this in
const buildQuery = require ('') //need to fill this in

const App = Express();

App.post('/', parseImage, buildQuery);

App.listen(3000);