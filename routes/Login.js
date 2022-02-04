var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var connection = require('../config/conexion');
const {isNotLoggedIn} = require('../controllers/logg')


router.get('/', isNotLoggedIn, function (req, res) {
  res.render('Login')
})

router.post('/', async(req, res)=>{
  const usuario = req.body.usuario;
  const contraseña = req.body.contraseña;
  let passwordHash = await bcrypt.hash(contraseña, 8);
  if(usuario && contraseña){
    connection.query('SELECT * FROM usuarios WHERE usuario =?', [usuario], async (error, results)=>{
      if(results.lenght == 0 || !(await bcrypt.compare(contraseña, results[0].contraseña))){
        res.render('Login', {
          alert: true,
          alertTitle: "Error",
          alertMessage: "USUARIO y/o PASSWORD incorrectas",
          alertIcon:'error',
          showConfirmButton: true,
          timer: undefined,
          ruta: 'Login'    
      });

      }else{   
        req.session.loggedin = true;  
				req.session.name = results[0].nombre;
        req.session.rol = results[0].rol;
				res.render('Login', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 3000,
					ruta: ''
      });

    }
});

} else {	
  res.render('Login', {
    alert: true,
    alertTitle: "Advertencia",
    alertMessage: "¡Por favor ingrese un usuario y/o contraseña!",
    alertIcon:'warning',
    showConfirmButton: false,
    timer: undefined,
    ruta: 'Login'
    });

  }
  
  
  
});




module.exports = router;
