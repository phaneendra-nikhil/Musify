/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";

const router = require('express').Router();


const { home } = require('../controllers/home.controller');
router.get('/', home);

module.exports = router;