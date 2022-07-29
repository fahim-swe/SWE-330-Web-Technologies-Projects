const {createPool} = require("mysql");

// APP_PORT=3000
// DB_PORT=3306
// DB_HOST=localhost
// DB_USER=root
// DB_PASS=mynewpassword
// MYSQL_DB=blogNodeJS

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});


module.exports = pool;