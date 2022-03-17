const data = require('./data.json');
const id = data.nextId;

function create(string) {
  data.notes[id] = string;
  console.log(data.notes);
}

module.exports = create;
