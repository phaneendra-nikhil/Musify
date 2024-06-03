/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";


const axiosConfig = require('../config/axios.config');

/**
 * @param {string} refreshToken
 * @returns {Object}
 */

const getRefreshToken = async(refreshToken) => {
    try{
        const response = await axiosConfig.token.post('/token', {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        });
        
        return response;
    } catch(err){
        console.log(err);
    }
};

module.exports ={ getRefreshToken }