const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  let responseData = '';
  try {
    responseData = fs.readFileSync('./server/routes/user/data/users.json', 'utf-8');
  } catch (err) {
    console.log(err);
  }
  res.send(responseData);
});

router.post('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send({ action: 'success' });
});

module.exports = router;
