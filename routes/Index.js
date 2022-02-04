var express = require('express');
var router = express.Router();


router.get('/',function (req, res) {
  if(req.session.loggedin){
    res.render('Index',{
      login: true,
      name: req.session.name,
      rol: req.session.rol
    });
  }else{
    res.render('Login',{
      login: false,
      name: 'Debe iniciar sesion',
    })
  }
});




router.get('/logout',(req, res)=>{
  req.session.destroy(()=>{
    res.redirect('/Login')
  });
});






module.exports = router;