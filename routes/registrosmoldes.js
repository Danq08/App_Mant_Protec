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
    res.render('registrosmoldes')
});


router.post('/',cargar.single('foto'),controladores.enviarmoldes);
router.post('/eliminarmoldes/:id',isLoggedIn,Admin,controladores.eliminarmoldes);
router.get('/editarmoldes/:id',isLoggedIn,controladores.editarmoldes);
router.post('/actualizar',isLoggedIn,cargar.single('foto'),controladores.actualizarmoldes);


module.exports = router;