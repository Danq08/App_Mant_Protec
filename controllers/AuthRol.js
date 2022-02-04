module.exports = {
    Admin(req,res,next){
        
        if(req.session.rol == "Admin"){
            next()
        }else{
            res.render('Index',{
                alert: true,
                alertTitle: "¡Advertencia!",
                alertMessage: "¡Necesitas permisos para realizar esta accion!",
                alertIcon:'warning',
                showConfirmButton: true,
                timer: undefined,
                ruta: ''    
      });
            
        }
    }



}



