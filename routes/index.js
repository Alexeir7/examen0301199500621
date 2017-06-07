var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/0301199500621', function(req, res, next){
  var yo = [
                {"nombre":"Alexei Rodriguez Bonilla"},
                {"cuenta":"0301199500621"},
                {"correo": "alexei.rodriguez95@hotmail.com"}
              ];

  res.json(yo);
});

router.get('/suma', function(req, res, next){
  res.render('suma',{"txtNumero1":"", "txtNumero2":""});
});

var suma = [];

router.post('/suma', function(req, res, next){

  suma.push(Number(req.body.txtNumero1) + Number(req.body.txtNumero2));

  var sm = suma;
  var rtObject = {};
  //rtObject.numero = req.body.numero1;
  rtObject.sm = sm;

  res.render('suma', rtObject);
});

module.exports = router;
