const express = require('express');
const cors = require('cors');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

const loginRoute = require('./routes/auth/login');
const logoutRoute = require('./routes/auth/logout');
const sessionRoute = require('./routes/auth/session');
const userRoute = require('./routes/user');

const checkSessionCookie = function (req, res, next) {
  // either string or undefined
  let cookieToCheck = 'X-token';
  const availableCookie = req.cookies[cookieToCheck];
  if (availableCookie) {
    res.cookie(cookieToCheck, availableCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 60 * 1000,
    });
    next();
  } else {
    res.send(401);
  }
};

const app = express();

app.use(cookieParser());

// set up CORS
const whitelist = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
  'http://localhost:3004',
];

app.use(
  cors({
    credentials: true,
    exposedHeaders: ['Pagination-Pages', 'Pagination-Total', 'COSMOS-Session-expiry'],
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('not allowed by CORS'));
      }
    },
  })
);

// Compress responses with gzip
app.use(compress());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Api routes
app.use('/login', loginRoute);
app.use('/session', sessionRoute);

// Protected Api routes
app.use(checkSessionCookie);
app.use('/logout', logoutRoute);

app.use('/users', userRoute);

app.listen(3010, () => {
  console.log(`app listening on port 3010`);
});
