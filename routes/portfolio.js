var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio', { 
    title: 'Justin Battrick',
    pageName: 'Portfolio'
  });
});

module.exports = router;
