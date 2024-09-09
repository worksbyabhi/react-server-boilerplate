const express = require('express');
const router = express.Router();
const token = require('./token.json');

router.post('', async (req, res) => {
  const { username, password } = req.body;

  try {
    res.cookie('X-token', token.admin, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
      maxAge: 30 * 60 * 1000,
    });

    res.send({ username, role: 'admin' });
  } catch (err) {
    res.status(400).send({ error: 'Invalid credentials' });
  }
});

module.exports = router;
