const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const token = req.cookies['X-token'];

  if (!token) {
    return res.status(401).send({ error: 'Authentication required' });
  }

  try {
    res.cookie('X-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 60 * 1000,
    });
    res.status(200).send({ username, role });
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' });
  }
});

module.exports = router;
