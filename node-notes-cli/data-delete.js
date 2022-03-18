const data = require('./data.json');

function deleteEntry(id) {
  delete data.notes[id];
}

module.exports = deleteEntry;
