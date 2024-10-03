// routes/index.js

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us'});
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us'});
});

/* Post Submit Contact page. */
router.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.render('submit-contact', {title: 'Thank You', name : name}); 
});

module.exports = router;
