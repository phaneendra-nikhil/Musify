/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

'use strict';

require('dotenv').config();

//base api url
const BASE_URL = 'https://api.spotify.com/v1';

//authentication api url
const TOKEN_BASE_URL = 'https://accounts.spotify.com/api';

//spotify client id
const CLIENT_ID = process.env.CLIENT_ID;

//client secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;

//redirect url for api
const REDIRECT_URI = process.env.REDIRECT_URI;

//scope for spotify api
const SCOPE = process.env.SCOPE;

//authentication state key
const STATE_KEY = 'spotify_auth_state';

//Api request
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

module.exports = {
    BASE_URL,
    TOKEN_BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    SCOPE,
    STATE_KEY,
    MARKET,
    LOW_LIMIT,
    DEFAULT_LIMIT
}