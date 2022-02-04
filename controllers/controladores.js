var conexion=require('../config/conexion');
var registro=require('../models/registro');
var borrar = require('fs');

module.exports={
    historialinyecion:function(req, res){
        registro.obtenerinyeccion(conexion, function (err,datos) {
            res.render('historialinyeccion', {title:'Aplicacion', registros:datos});
        });
  
    },

    historialmoldes:function (req, res) {
        registro.obtenermoldes(conexion, function (err, datos) {
            res.render('historialmoldes', {title:'Aplicacion', registros:datos})
        })
    },

    historialgeneral:function (req, res) {
        registro.obtenergeneral(conexion, function (err, datos) {
            res.render('historialgeneral', {title:'Aplicacion', registros:datos})
        })
    },

    enviarinyeccion:function (req, res) {
        registro.insertarinyeccion(conexion,req.body,req.file, function (err) {
            res.redirect('/historialinyeccion');
        });
    },

    enviarmoldes:function (req, res) {
        registro.insertarmoldes(conexion,req.body,req.file, function (err) {
            res.redirect('/historialmoldes');
        });
    },

    enviargeneral:function (req, res) {
        registro.insertargeneral(conexion,req.body,req.file, function (err) {
            res.redirect('/historialgeneral');
        });
    },

    eliminarinyeccion:function (req, res) {
        registro.retornarDatosinyeccion(conexion,req.params.id,function (err,registros) {
            var nombreImagen='public/images/'+(registros[0].foto);
            
            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);

            }
            registro.borrarinyeccion(conexion,req.params.id,function (err) {
                res.redirect('/historialinyeccion');
            });

        });
    },

    eliminarmoldes:function (req, res) {
        registro.retornarDatosmoldes(conexion,req.params.id,function (err,registros) {
            var nombreImagen='public/images/'+(registros[0].foto);
            
            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);

            }
            registro.borrarmoldes(conexion,req.params.id,function (err) {
                res.redirect('/historialmoldes');
            });

        });
    },

    eliminargeneral:function (req, res) {
        registro.retornarDatosgeneral(conexion,req.params.id,function (err,registros) {
            var nombreImagen='public/images/'+(registros[0].foto);
            
            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);

            }
            registro.borrargeneral(conexion,req.params.id,function (err) {
                res.redirect('/historialgeneral');
            });

        });
    },

    editarinyeccion:function (req, res) {
        registro.retornarDatosinyeccion(conexion,req.params.id,function (err,registros) {
            res.render('editarinyeccion', {registro:registros[0]});
        });
        
    },

    editarmoldes:function (req, res) {
        registro.retornarDatosmoldes(conexion,req.params.id,function (err,registros) {
            res.render('editarmoldes', {registro2:registros[0]});
        });
        
    },

    editargeneral:function (req, res) {
        registro.retornarDatosgeneral(conexion,req.params.id,function (err,registros) {
            res.render('editargeneral', {registro3:registros[0]});
        });
        
    },
    actualizarinyeccion:function (req, res) {
       
        if(req.file){
            if(req.file.filename){
                registro.retornarDatosinyeccion(conexion,req.body.id,function (err,registros) {
                    var nombreImagen='public/images/'+(registros[0].foto);
                    
                    if(borrar.existsSync(nombreImagen)){
                        borrar.unlinkSync(nombreImagen);
        
                    }
                
                    registro.actualizarArchivoinyeccion(conexion,req.body,req.file,function(err) {
                        
                    });
            });

        }
        
        }
                if([req.body.equipos, req.body.observaciones, req.body.estado]){
                    registro.actualizarinyeccion(conexion,req.body,function (err) {
                    
                    });

                } 
                res.redirect('/historialinyeccion');
        },

        actualizarmoldes:function (req, res) {
       
            if(req.file){
                if(req.file.filename){
                    registro.retornarDatosmoldes(conexion,req.body.id,function (err,registros) {
                        var nombreImagen='public/images/'+(registros[0].foto);
                        
                        if(borrar.existsSync(nombreImagen)){
                            borrar.unlinkSync(nombreImagen);
            
                        }
                    
                        registro.actualizarArchivomoldes(conexion,req.body,req.file,function(err) {
                            
                        });
                });
    
            }
            
            }
                    if([req.body.equipos, req.body.observaciones, req.body.estado]){
                        registro.actualizarmoldes(conexion,req.body,function (err) {
                        
                        });
    
                    } 
                    res.redirect('/historialmoldes');
            },

            actualizargeneral:function (req, res) {
       
                if(req.file){
                    if(req.file.filename){
                        registro.retornarDatosgeneral(conexion,req.body.id,function (err,registros) {
                            var nombreImagen='public/images/'+(registros[0].foto);
                            
                            if(borrar.existsSync(nombreImagen)){
                                borrar.unlinkSync(nombreImagen);
                
                            }
                        
                            registro.actualizarArchivogeneral(conexion,req.body,req.file,function(err) {
                                
                            });
                    });
        
                }
                
                }
                        if([req.body.equipos, req.body.observaciones, req.body.estado]){
                            registro.actualizargeneral(conexion,req.body,function (err) {
                            
                            });
        
                        } 
                        res.redirect('/historialgeneral');
                },

        usuarios: function (req, res) {
            registro.Obtenerusuarios(conexion, function (err, datos) {
                res.render('Usuarios', {title:'Aplicacion', usuarios:datos});
            });
        },
        
        eliminarUsuario: function (req, res) {
            registro.borrarUsuario(conexion, req.params.id,function (err) {
                if(err) throw err;
                res.redirect('/Usuarios');
            });
        },


        editarUsuario:function (req, res) {
            registro.MostrarDatosUser(conexion,req.params.id,function (err,registros) {
                res.render('editarUser', {usuario:registros[0]});
            });
        },

        
        Actualizaruser: function (req, res) {
            if([req.body.nombrecompleto, req.body.rol, req.body.usuario, req.body.idUsuarios]){
                registro.ActualizarUsuario(conexion,req.body, function (err) {
                
                });
                

            } 
            
            res.redirect('/Usuarios')
        },




        
        



        

    


    



    

}