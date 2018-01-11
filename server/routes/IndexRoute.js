var express = require('express');
var router = express.Router();
var path = require('path');

var IndexService = require('../services/IndexService');

/* GET home page. */
/*router.get('/render', function(req, res, next) {
	console.log('1' + path.join(__dirname + '/index.html'));
	res.sendFile(path.join(__dirname + '/index.html'));
});*/

var indexService = new IndexService();

router.get('/', function(req, res, next) {
    res.send('index', { title: 'Express' });
});

module.exports = router;
