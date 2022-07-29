const {
        create,
        getUserByUserId,
        getUsers,
        updateUser,
        deleteUser
    } = require('./user.service');

const {sign} = require('jsonwebtoken');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        
        create(body, (err, results) => {
            if(err){
                console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
                    }
                );
            }

            return res.status(200).json({
                    success : 1,
                    data: results
                }
            );
        })
    },

    getUserByUserId: (req, res) => {
        const id = req.params.id;
        // console.log(id);

        getUserByUserId(id, (err, results)=>{
            
            
            if(err){
                console.log("HII" + err);
                return res.json({
                    success: 1,
                    data: err
                });
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                })
            }
            console.log("GET: " + results[0]);
            return res.json({
                
                success: 1,
                data: results[0]
            });
        });
    },


    getUsers: (req, res)=>{
        getUsers((err, results)=>{
            if(err){
                console.log(err);
                return ;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },


    updateUser: (req, res)=>{
        const body = req.body;
        console.log(body);
        updateUser(body, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },

    deleteUser: (req, res) => {
        const id = req.params.id;
        console.log(id);

        deleteUser(id, (err, result)=>{

            if(err){
                console.log(err);
                return ;
            }
            
            console.log(result);
            if(result){
                return res.json({
                    success: 1,
                    message: "deleted successfully"
                })
            }

            return res.json({
                success: 0,
                message: "not found"
            })
            
            // if(err) {
            //     console.log(err);
            //     return;
            // }
            // if(!result){
            //     return res.json({
            //         success: 0,
            //         message: "record not found"
            //     });
            // }
            // return res.json({
            //     success: 1,
            //     message: "user deleted successfully"
            // });
        });
    }
}