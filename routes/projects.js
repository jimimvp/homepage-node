var express = require('express');
var router = express.Router();

router.get('/projects', function (req, res, next) {

    res.render('projects')

})

module.exports = router