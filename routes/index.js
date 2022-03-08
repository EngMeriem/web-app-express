var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', ({title: 'Home Page'}));
});

router.get('/home', function(req, res, next) {
  res.render('index', ({title: 'Home Page'}));
});

router.get('/contact', function(req, res, next) {
  res.render('contact', ({title: 'Contact Us'}));
});

router
  .route("/contact")
    .get((req, res) => {
      let data = {
          "name": name,
          "email": email,
          "message": message
      };
      res.status(200).send(data);
  })
    .post((req,res) => {
      // code to perform particular action.
      // To access POST variable use req.body()methods.
      console.log(req.body);
      let data={
        "name" : req.body.name,
        "email" : req.body.email,
        "message" : req.body.message
      };
      res.status(200).render('contact-success',{data});    
    });

router.get('/services', function(req, res, next) {
  res.render('services' ,({title: 'Our Services'}));
});

module.exports = router;