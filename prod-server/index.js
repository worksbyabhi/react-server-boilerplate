const path = require('path');
const express = require('express');
const compress = require('compression');
const helmet = require('helmet');

const basePath = path.resolve(__dirname, '..');

const app = express();

app.disable('etag');

app.use(cors());

app.use(compress());

app.use(helmet());

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
