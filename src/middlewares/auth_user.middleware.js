/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";


const authenticatedUser = (req, res, next) =>{
    const {
        access_token,
        refresh_token
    } = req.cookies;

    if(access_token && !refresh_token){
       return res.redirect('/auth'); 
    } else if(!access_token && !refresh_token){
        return res.redirect('/login');
    } else if(!access_token && refresh_token){
        return res.redirect(`/auth/refresh_token?redirect=${
            req.originalUrl
        }`)
    }
    next();
}

module.exports = authenticatedUser;