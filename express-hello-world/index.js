const express = require('express');
const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('Hello world!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening at port 3000.');
});
