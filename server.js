// server.js

//packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//mongoose.connect("db route here");
var User = require('./app/models/user')

var db = require('./config/db');
//configures app to use bodyParser()

//gets data from POST

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//routes for api
var router = express.Router();

//middleware for all HTTP requests
router.use(function(req, res, next){
    console.log('something');
    next();
});

// sets the static files location /public/img
app.use(express.static(__dirname + '/public'));
//register routes
app.use('/api', router);

//server start

app.listen(port);
console.log('Working on ' + port);
