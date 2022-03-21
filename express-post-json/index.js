const express = require('express');

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (var key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (res, req) => {
  const newGrade = req.body;
  const id = nextId;
  newGrade.id = id;
  nextId++;
  grades[id] = newGrade;
  res.statusCode(201).json(newGrade);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
