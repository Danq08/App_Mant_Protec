var express = require('express');
var router = express.Router();
const controladores = require('../controllers/controladores');
const {isLoggedIn} = require('../controllers/logg')

router.get('/',isLoggedIn ,controladores.historialmoldes);

  


module.exports = router;