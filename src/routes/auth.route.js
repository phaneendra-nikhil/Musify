/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

'use strict';

const router = require('express').Router();

const { auth, callback } = require('../controllers/auth.controller');
const { refreshToken } = require('../controllers/refresh_token.controller');

router.get('/', auth);
router.get('/callback', callback);
router.get('/refresh_token', refreshToken);

module.exports = router;