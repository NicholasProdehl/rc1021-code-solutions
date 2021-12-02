const express = require('express');
const app = express();

const grades = {};
let id = 3;
app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  // eslint-disable-next-line no-console
  const grade = req.body;
  grade.id = id;
  grades[id] = grade;
  id++;
  res.status(201).json(grade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to Port 3000!');
});
