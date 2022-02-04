module.exports = {
    isAdmin(req, res, next){
        if(req.session.rol == 0){
            next();
        }else
        res.send('No tienes Acceso')
    }
}