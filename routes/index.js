var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getOrders', function(req, res) {
  var db = req.db;
  var collection = db.get('orders');
  collection.find({},{},function(e,docs){
    res.type('json');
    res.jsonp(docs);
  });
});

router.post('/submit', function(req,res){
  var db = req.db;
  var collection = db.get('orders');
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  if (name && email && message){
    collection.insert({ "name" : name, "email" : email, "message" : message});
    res.send('Success!');
  } else {
    res.send('Your submission failed.');
  }
});

router.all('/courier', function(req,res){
  var db = req.db;
  var collection = db.get('courier');
  console.log(req.body);
  var name = req.body.name;
  var message = req.body.message;
  var photo = req.body.photo;
  collection.insert({ "name" : name, "email" : email, "message" : message});
  console.log(name, message, 'recieved');
  res.send('Success!');
});
module.exports = router;
