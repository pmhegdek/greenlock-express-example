var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Hello Buddy',
    description: 'You are on a secure website'
   });
});

module.exports = router;
