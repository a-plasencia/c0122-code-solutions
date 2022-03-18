let data = require('./data.json');
const fs = require('fs');
const create = require('./data-add.js');
const update = require('./data-update.js');
const deleteEntry = require('./data-delete');
const command = process.argv[2];
const createMessage = process.argv[3];
const edit = process.argv[3];
const editMessage = process.argv[4];

if (command === 'read') {
  for (var key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);

  }
  data = JSON.stringify(data, null, 2);
} else if (command === 'create') {
  create(createMessage);

  data.nextId++;
  data = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
} else if (command === 'update') {
  update(edit, editMessage);
  data = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
} else if (command === 'delete') {
  deleteEntry(edit);
  data = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
} else { console.log('invalid command'); }

// successful test console.logs stay here
// console.log(command);
// console.log(data);
// console.log(data.nextId);
