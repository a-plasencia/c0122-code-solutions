const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

const error = {
  get404: {
    error: 'cannot find note with id '
  },
  get400: {
    error: 'id must be a positive integer'
  },
  post400: {
    error: 'content is a required field'
  },
  post500: {
    error: 'An unexpected error occured'
  }
};

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
      res.status(404).json(`error: cannot find note with id ${id}`);
    } else {
      res.status(200).json(data.notes[id]);
    }
  } else if (id < 0) {
    res.status(400).json(error.get400);
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json(error.post400);
  } else if (req.body.content !== undefined) {
    const newNote = req.body;
    const id = data.nextId;
    newNote.id = id;
    data.notes[id] = newNote;
    data.nextId++;
    const dataString = JSON.stringify(data, null, 2);
    fs.writeFile('derp/data.json', dataString, err => {
      if (err) {
        res.status(500).json(error.post500);
        console.error(err);
      } else { res.status(201).json(newNote); }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id > 0) {
    if (!data.notes[id]) {
      res.status(404).json(`error: cannot find note with id ${id}`);
    } else {
      delete data.notes[id];
      const dataString = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataString, err => {
        if (err) {
          res.status(500).json(error.post500);
          console.error(err);
        } else { res.sendStatus(204); }
      });
    }
  } else if (id < 0) {
    res.status(400).json(error.get400);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json(error.get400);
  } else if (req.body.content === undefined) {
    res.status(400).json(error.post400);
  } else if (id > 0) {
    if (!data.notes[id]) {
      res.status(404).json(`error: cannot find note with id ${id}`);
    } else {
      const newNote = req.body;
      data.notes[id] = newNote;
      const dataString = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataString, err => {
        if (err) {
          res.status(500).json(error.post500);
          console.error(err);
        } else {
          res.status(200).json(newNote);
        }
      });
    }
  }
});
