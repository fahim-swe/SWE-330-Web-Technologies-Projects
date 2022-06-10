const pool = require("../config/database");
const {createUser} = require("./user.controller");

const router = require('express').Router();



router.post("/", createUser);

module.exports = {
    create: (data, callBack) => {

    },
    getUsers: callBack => {
        pool.query(
            `select id, firstName, lastName, gender, email, number form registration`,
            [],
            (error, result, field)=>{
                if(error) return (error);
                return callBack(null, result);
            }
        )
    }
}