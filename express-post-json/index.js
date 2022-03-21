const express = require('express');
const app = express();
app.use(express.json());
const grades = {};
// const nextId = 1;

const gradesArray = Object.values(grades);

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

// app.post('/api/grades', (res, req) => {
//   res.statusCode(201);
//   console.log('Hi your data is being processed');
//   res.send(req.body);
// });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
