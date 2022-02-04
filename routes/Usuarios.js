var express = require('express');
var router = express.Router();
const {isLoggedIn} = require('../controllers/logg')
const controladores = require('../controllers/controladores');
const {Admin} = require('../controllers/AuthRol')


router.get('/',Admin,controladores.usuarios,isLoggedIn);
router.post('/eliminarusuario/:id',Admin,controladores.eliminarUsuario,isLoggedIn);
router.get('/editarusuario/:id',Admin,controladores.editarUsuario,isLoggedIn);
router.post('/actualizar',Admin,controladores.Actualizaruser,isLoggedIn);

module.exports = router;