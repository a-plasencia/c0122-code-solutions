const data = require('./data.json');
const id = data.nextId;

function create(string) {
  data.notes[id] = string;

}

module.exports = create;
