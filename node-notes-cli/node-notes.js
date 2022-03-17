let data = require('./data.json');
const fs = require('fs');
const create = require('./data-add.js');
const command = process.argv[2];
const createMessage = process.argv[3];

if (command === 'read') {
  for (var key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);

  }
  data = JSON.stringify(data, null, 2);
}

if (command === 'create') {
  create(createMessage);

  data.nextId++;
  data = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
}

// successful test console.logs stay here
// console.log(command);
// console.log(data);
// console.log(data.nextId);
