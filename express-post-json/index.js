const express = require('express');
const app = express();

const grades = {};
let id = 1;
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
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
