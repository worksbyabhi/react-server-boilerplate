const express = require('express');
const cors = require('cors');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const bodyParser = require('body-parser');

require('dotenv').config();

const userRoute = require('./routes/user');

const checkSessionCookie = function (req, res, next) {
  // either string or undefined
  let cookieToCheck = '';
  const availableCookie = req.cookies[cookieToCheck];
  if (availableCookie) {
    res.cookie(cookieToCheck, availableCookie, { maxAge: 30 * 60 * 1000 });
    res.setHeader('COSMOS-Session-expiry', Date.now() + 30 * 60 * 1000);
    next();
  } else {
    res.send(401);
  }
};

const app = express();

app.disable('etag');

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
        callback(new Error(' not allowed by CORS'));
      }
    },
  })
);

// Compress responses with gzip
app.use(compress());

// Add some default security layer
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(checkSessionCookie);

app.use('/users', userRoute);

app.listen(3010, () => {
  console.log(`app listening on port 3010`);
});
