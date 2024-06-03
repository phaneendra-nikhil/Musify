/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

'use strict';

const router = require('express').Router();

const { login } = require('../controllers/login.controller');

router.get('/', login );
module.exports = router;