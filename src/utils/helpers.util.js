/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

'use strict';

const apiConfig = require('../config/api.config');

/**
 * 
 * @param {number} length
 * @returns {string} Generated string
 */

const generateRandomString = function (length){
    let randomString = '';
    const possibleLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    for(let i=0; i<length-1; i++){
        const randomIndex = Math.floor(Math.random() * possibleLetters.length);
        randomString += possibleLetters[randomIndex];
    }

    return randomString;
}

module.exports = {
    generateRandomString
}