/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";


const userApi = require('../api/user.api')

const home = async(req, res)=>{

    const currentProfile = await userApi.getProfile(req);

    res.render('./pages/home',{
        currentProfile
    })
}

module.exports = {
    home
}