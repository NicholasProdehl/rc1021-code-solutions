const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
const jsonMiddleWare = express.json();
app.use(jsonMiddleWare);

app.post('/api/grades', (req, res) => {
  const body = req.body;
  const score = Math.isInteger(body.score);
  if (!body.name || !body.course || !score || score > 100 || score < 0) {
    res.status(400).json({ error: 'Entry must contain "name", "course", and "score"; "score" being a valid integer from 0 to 100.' });
    return;
  }
  const values = [body.name, body.course, body.score];
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  db.query(sql, values)
    .then(); // ended here.
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening in on port 3000!');
});
