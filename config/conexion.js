require('dotenv').config();
const mysql = require('mysql2')

const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    dateStrings:'local',
    
  });
 
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Conectado a la base de datos!');
});

module.exports = conexion;