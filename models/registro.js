module.exports={
    obtenerinyeccion:function(conexion, funcion) {
        conexion.query('SELECT * FROM registrosinyeccion', funcion);
    },

    obtenermoldes:function (conexion, funcion) {
        conexion.query('SELECT * FROM registrosmoldes', funcion);
    },

    obtenergeneral:function (conexion, funcion) {
        conexion.query('SELECT * FROM registrosgeneral', funcion);
    },

    insertarinyeccion:function(conexion, datos, archivos, funcion) {
        conexion.query('INSERT INTO registrosinyeccion (categoria, equipo, observaciones, estado, foto) VALUES (?,?,?,?,?)',
        [datos.categoria,datos.equipo, datos.observaciones, datos.estado, archivos.filename], funcion);
    },

    insertarmoldes:function(conexion, datos, archivos, funcion) {
        conexion.query('INSERT INTO registrosmoldes (categoria, equipo, observaciones, estado, foto) VALUES (?,?,?,?,?)',
        [datos.categoria,datos.equipo, datos.observaciones, datos.estado, archivos.filename], funcion);
    },

    insertargeneral:function(conexion, datos, archivos, funcion) {
        conexion.query('INSERT INTO registrosgeneral (categoria, equipo, observaciones, estado, foto) VALUES (?,?,?,?,?)',
        [datos.categoria,datos.equipo, datos.observaciones, datos.estado, archivos.filename], funcion);
    },

    retornarDatosinyeccion:function (conexion, id, funcion) {
        conexion.query('SELECT * FROM registrosinyeccion WHERE id=?',[id],funcion);
    },

    retornarDatosmoldes:function (conexion, id, funcion) {
        conexion.query('SELECT * FROM registrosmoldes WHERE id=?',[id],funcion);
    },

    retornarDatosgeneral:function (conexion, id, funcion) {
        conexion.query('SELECT * FROM registrosgeneral WHERE id=?',[id],funcion);
    },

    borrarinyeccion:function (conexion, id, funcion) {
        conexion.query('DELETE FROM registrosinyeccion WHERE id=?',[id],funcion);
    },

    borrarmoldes:function (conexion, id, funcion) {
        conexion.query('DELETE FROM registrosmoldes WHERE id=?',[id],funcion);
    },

    borrargeneral:function (conexion, id, funcion) {
        conexion.query('DELETE FROM registrosgeneral WHERE id=?',[id],funcion);
    },

    actualizarinyeccion:function(conexion, datos, funcion) {
        conexion.query('UPDATE registrosinyeccion SET categoria=?, equipo=?, observaciones=?, estado=? WHERE id=?',
        [datos.categoria, datos.equipo, datos.observaciones, datos.estado, datos.id],funcion);

    },
    actualizarArchivoinyeccion:function(conexion, datos, archivo, funcion) {
        conexion.query('UPDATE registrosinyeccion SET foto=? WHERE id=?',
        [archivo.filename,datos.id],funcion);

    },

    actualizarmoldes:function(conexion, datos, funcion) {
        conexion.query('UPDATE registros2 SET categoria=?, equipo=?, observaciones=?, estado=? WHERE id=?',
        [datos.categoria, datos.equipo, datos.observaciones, datos.estado, datos.id],funcion);

    },
    actualizarArchivomoldes:function(conexion, datos, archivo, funcion) {
        conexion.query('UPDATE registros2 SET foto=? WHERE id=?',
        [archivo.filename,datos.id],funcion);

    },

    actualizargeneral:function(conexion, datos, funcion) {
        conexion.query('UPDATE registros3 SET categoria=?, equipo=?, observaciones=?, estado=? WHERE id=?',
        [datos.categoria, datos.equipo, datos.observaciones, datos.estado, datos.id],funcion);

    },
    actualizarArchivogeneral:function(conexion, datos, archivo, funcion) {
        conexion.query('UPDATE registros3 SET foto=? WHERE id=?',
        [archivo.filename,datos.id],funcion);

    },
    
    Obtenerusuarios: function(conexion, funcion){
        conexion.query('SELECT * FROM usuarios', funcion);
    },


    borrarUsuario: function (conexion, id, funcion) {
        conexion.query('DELETE FROM usuarios WHERE idusuario=?',[id],funcion);
    },

    MostrarDatosUser:function (conexion, id, funcion, datos) {
        conexion.query('SELECT * FROM usuarios WHERE idusuario=?',[id, datos.id],funcion);
    },

    ActualizarUsuario: function (conexion, datos, funcion) {
        conexion.query('UPDATE usuarios SET nombrecompleto=?, rol=?, usuario=? WHERE idusuario=?',
        [datos.nombrecompleto, datos.rol, datos.usuario, datos.idusuario],funcion);
    },

    
    




}
