const express = require('express');
const path = require('path');

const app = express();

const pubPath = path.join(__dirname, '/public');

console.log(pubPath);

app.use(express.static(pubPath));

const port = 3000;

app.listen(port, function (err) {
  if (err) console.log('Error in server setup');
  console.log('Server listening on Port', port);
});
