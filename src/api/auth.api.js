/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";


const apiConfig = require('../config/api.config');
const axiosConfig = require('../config/axios.config');

/**
 * 
 * @param {string} code
 * @returns {object} 
 */

const getToken = async (code) =>{
    try{
        const response = await axiosConfig.token.post('/token',{
            grant_type: 'authorization_code',
            code,
            redirect_uri: apiConfig.REDIRECT_URI
        })

        return response;
    } catch(err){
        console.log(err);
    }
}

module.exports ={
    getToken
}
