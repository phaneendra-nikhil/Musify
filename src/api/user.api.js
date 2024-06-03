/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";

const { getData } = require('../config/axios.config');

/**
 * 
 * @param {Object} req
 * @returns {Object} 
 */
const getProfile = async(req) =>{
    const {data: currentProfile} = await getData('/me', req.cookies.access_token);
    return currentProfile;
}

module.exports ={
    getProfile
}