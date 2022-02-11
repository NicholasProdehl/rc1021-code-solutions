const express = require('express');
const app = express();
const notes = {
  1: {
    content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
    id: 1
  },
  2: {
    content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
    id: 2
  },
  3: {
    content: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
    id: 3
  },
  4: {
    content: 'A closure is formed when a function retains access to variables in its lexical scope.',
    id: 4
  }
};
function isPositiveInteger(str) {
  if (typeof str !== 'string') {
    return false;
  }

  const num = Number(str);

  if (Number.isInteger(num) && num > 0) {
    return true;
  }

  return false;
}

app.get('/api/notes', (req, res) => {
  const appArray = [];
  for (const key in notes) {
    appArray.push(notes[key]);
  }
  res.json(appArray);
  res.sendStatus(200);
});

app.get('api/notes/:id', (req, res) => {
  const error = { error: 'id must be a positive integer' };
  if (!isPositiveInteger(req.params.id)) {
    res.json(error);
    res.sendStatus(400);
  }
  const appArray = [];
  for (const key in notes) {
    appArray.push(notes[key]);
  }
  // const tempReqBody = req.params.id;
  // console.log('temp req body: ', tempReqBody);
  const notesId = appArray.map(({ tempReqBody }) => ({ tempReqBody }));
  res.json(notesId);
  res.sendStatus(200);
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000');
});
