const express = require('express');

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

let nextId = 2;
const grades = {
  1: {
    id: 1,
    name: 'Plasencia Alex',
    course: 'Express',
    score: 50
  }
};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const id = nextId;
  newGrade.id = id;
  grades[id] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
