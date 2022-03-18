const data = require('./data.json');

function update(id, string) {
  data.notes[id] = string;
}

module.exports = update;
