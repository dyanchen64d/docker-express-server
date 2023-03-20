const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world.');
});

app.listen(3003, () => {
  console.log('app listening on port 3000');
});
