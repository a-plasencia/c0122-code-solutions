const express = require('express');
const app = express();
const data = require('./data.json');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in data.notes) {
    notesArray.push(data.notes[key]);
  }

  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id > 0) {
    if (!data.notes[id]) {
      res.status(404).send(
        `
        {
          "error": "cannot find note with id ${id}"
        }
        `);
    } else {
      res.status(200).json(data.notes[id]);
    }
  } else if (id < 0) {
    console.error('The number you entered was negative, please enter a positve integer');
    res.status(400).send(
      `
      {
        "error": "id must be a positive integer"
      }
      `
    );
  }
});
