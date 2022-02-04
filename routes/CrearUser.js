var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
const conexion = require('../config/conexion')
const {isLoggedIn} = require('../controllers/logg');


router.get('/', isLoggedIn, function (req, res) {
    res.render('CrearUser')
});
router.post('/', async(req, res)=>{
    const nombre = req.body.nombre;
    const rol = req.body.rol;
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
    let passwordHash = await bcrypt.hash(contraseña, 8);
conexion.query('INSERT INTO usuarios SET ?',{nombre:nombre,rol:rol,usuario:usuario,contraseña:passwordHash},async(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('CrearUser',{
                alert:true,
                alertTitle: "Registrado",
                alertMessage: 'Registro exitoso!',
                alertIcon: 'success',
                showConfirmButton:false,
                timer:1500,
                ruta:''
            })
        }
    })
});









  


module.exports = router;