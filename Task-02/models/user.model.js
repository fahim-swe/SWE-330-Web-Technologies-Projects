const mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mynewpassword",
    database: "crud_application"
});

db.connect((err)=>{
    if(!err){
        console.log("DataBase connection succeded.");
    }
    else{
        console.log("DataBase connection failed \n Error: " + JSON.stringify(err, undefined, 2));  
    }
});

module.exports = db;