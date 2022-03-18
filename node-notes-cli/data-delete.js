const data = require('./data.json');

function deleteEntry(id) {
  for (var key in data.notes) {
    if (id === key) {
      delete data.notes[key];
    }
  }
}

module.exports = deleteEntry;
