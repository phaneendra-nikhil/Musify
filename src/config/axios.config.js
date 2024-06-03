/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";

const axios = require('axios').default;
const querystring = require('querystring');

const apiConfig = require('./api.config');
const { access } = require('fs');

const token = axios.create({
    baseURL: apiConfig.TOKEN_BASE_URL,
    headers: {
        'Authorization' : `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' +apiConfig.CLIENT_SECRET).toString('base64'))}`,
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
});

const api = axios.create({baseURL: apiConfig.BASE_URL});

/**
 * 
 * @param {string} apiUrl 
 * @param {string} access_token
 * @returns {Promise} 
 */
const getData = async(apiUrl, access_token) =>{
    try{
        const response = await api.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        return response;
    } 
    catch(err){
        console.log(err);
    }
}

module.exports = {
    token,
    getData
}