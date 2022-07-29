const pool = require('../config/database');

module.exports = {

    create: (data, callBack) => {
        pool.query(
            `insert into User(UserName, Password, DateOfBirth, Email, Phone) values(?, ?, ?, ?, ?);`,
            [
                data.username, 
                data.password, 
                data.dateOfBirth, 
                data.email, 
                data.phone
            ], (error, result, fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null, result);
            }
        );
    },

   
    getUsers: callBack => {
        pool.query(`select UserName, DateOfBirth, Email, Phone from User`, 
            [],
            (error, result, fields)=>{
                if(error) return callBack(error);
                return callBack(null, result);
            }
        )
    },

    getUserByUserId: (id, callBack) => {
        pool.query(`select UserName, DateOfBirth, Email, Phone from User where  id = ?`, 
            [id],

            (error, results, fields)=>{
                if(error) return callBack(error);
                return callBack(results[0]);
            }
        )
    }, 

    
    updateUser: (data, callBack) => {
        pool.query(
            `update User set UserName = ?, DateOfBirth = ?, Email = ?, Phone = ?
            where id = ?`,
            [
                data.username, 
                data.dateOfBirth, 
                data.email, 
                data.phone,
                data.id
            ], (error, result, fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null, result[0]);
            }
        );
    }, 


    deleteUser: (id, callBack) => {
        pool.query(
            `delete from User where id = ?`,
            [id],
            
            (error, result) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null, result);
            }
        );
    }, 
};