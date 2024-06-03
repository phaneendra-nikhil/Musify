'use strict';


const cors  = require('cors');
const cookieParser = require("cookie-parser");

/**
 * custom modules
 */
const login = require('./src/routes/login.route');
const auth = require('./src/routes/auth.route');
const authenticatedUser = require('./src/middlewares/auth_user.middleware');
const home = require('./src/routes/home.route');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.use(cors()).use(cookieParser( ));

app.use('/login', login);

app.use('/auth', auth);
app.use(authenticatedUser);


/**
 * home page
 */
app.use('/', home);

app.listen(5000, () => {
    console.log(`server listening at http://localhost:5000`);
})