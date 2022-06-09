var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const buffer = require("buffer");

mongoose.connect("mongodb://localhost/serenity", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if (error) {
        console.log("Cannot connect to DB")
    }
    else
        console.log("Connected to DB")
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
