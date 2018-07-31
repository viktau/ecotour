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
router.post('/contakt', function(req, res, next) {
    console.log("Обробка форми " + req.body.firstname);
    console.log("Обробка форми " + req.body.Town);
    console.log("Обробка форми " + req.body.Email);
    res.render('contakt', { title: 'Контакти' });
});
module.exports = router;