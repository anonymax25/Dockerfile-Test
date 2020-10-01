'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, 1, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
}).on('error', function (err) {
    console.log(err);
});