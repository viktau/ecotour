var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Головна' });
});
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'Країни' });
});
router.get('/tours', function(req, res, next) {
    res.render('tours', { title: 'Тури' });
});
router.get('/contakt', function(req, res, next) {
    res.render('contakt', { title: 'Контакти' });
});

module.exports = router;