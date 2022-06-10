const mysql = require('mysql');


// Mysql 
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'mynewpassword',
    database        : 'registration'
});


module.exports = pool;