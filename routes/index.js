var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function (req, res, next) {

    res.render('projects')

});

router.get('/cv', function(req, res, next) {

    res.redirect('/files/MarinVlastelicaCV.pdf');

});

router.get('/blog', function(req, res, next) {
    res.render('blog');
});


module.exports = router;
