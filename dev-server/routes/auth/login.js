const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const users = require('./store/db.json');

router.post('', async (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    try {
      const userData = JSON.parse(
        fs.readFileSync(`./dev-server/routes/auth/store/${username}.json`)
      );
      const token = jwt.sign(
        { username: userData.username, role: userData.role },
        process.env.JWT_SECRET,
        {
          expiresIn: '30m',
        }
      );
      res.cookie('X-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
        maxAge: 30 * 60 * 1000,
      });
      res.send(userData);
    } catch {
      res.status(400).send({ error: 'Invalid credentials' });
    }
  } else {
    res.status(400).send({ error: 'Invalid credentials' });
  }
});

module.exports = router;
