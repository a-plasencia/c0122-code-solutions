const data = require('./data.json');

function update(id, string) {
  for (var key in data.notes) {
    if (id === key) {
      data.notes[key] = string;
    }
  }
}

module.exports = update;
