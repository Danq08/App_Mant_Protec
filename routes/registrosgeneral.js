var express = require('express');
var router = express.Router();
const controladores = require('../controllers/controladores');
const {isLoggedIn} = require('../controllers/logg')
const {Admin} = require('../controllers/AuthRol')

var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen= multer.diskStorage({
    destination:function (request,file,callback) {
        callback(null,'./public/images/');
        
    },
    filename:function (request, file, callback) {
        callback(null, fecha+'_'+file.originalname);
    }
});
var cargar = multer({storage:rutaAlmacen});

router.get('/',isLoggedIn, (req, res) =>{
    res.render('registrosgeneral')
});




router.post('/',cargar.single('foto'),controladores.enviargeneral,);
router.post('/eliminargeneral/:id',isLoggedIn, Admin, controladores.eliminargeneral);
router.get('/editargeneral/:id',isLoggedIn,controladores.editargeneral);
router.post('/actualizar',isLoggedIn,cargar.single('foto'),controladores.actualizargeneral);



module.exports = router;