const data = require('./data.json');
const command = process.argv[2];
console.log(command);
console.log(data);
console.log(data.nextId);
for (var key in data.notes) {
  console.log(`${key}: ${data.notes[key]}`);
}
