const express = require('express');

const app = express();

const host = '127.0.0.1';
const port = 3001;

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
