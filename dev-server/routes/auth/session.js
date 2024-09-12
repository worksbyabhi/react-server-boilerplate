const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
  const token = req.cookies['X-token'];

  if (!token) {
    return res.status(401).send({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { username } = decoded;
    const userData = JSON.parse(fs.readFileSync(`./dev-server/routes/auth/store/${username}.json`));

    res.cookie('X-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 60 * 1000,
    });
    res.status(200).send(userData);
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' });
  }
});

module.exports = router;
