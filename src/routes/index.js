var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController.js');

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coach' });
}); */
router.get("/",mainController.index);
router.get("/accPartner",mainController.accpartner);
router.get("/about",mainController.about);
router.get("/coach",mainController.coach);
router.get("/contacto",mainController.contacto);
router.post("/contacto/enviar",mainController.enviar);

module.exports = router;
