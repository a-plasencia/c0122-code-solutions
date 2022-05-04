/* exported titleCase */

function titleCase(title) {
  let string = title;
  string = string.toLowerCase();
  string = string.split(' ');
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'javascript' || string[i] === 'javascript:') {
      string[i] = string[i][0].toUpperCase() + string[i].slice(1, 4) + string[i][4].toUpperCase() + string[i].slice(5);
    }

    if (string[i] === 'api') {
      string[i] = 'API';
    }

    if (string[i] === string[0]) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }

    if (string[i].length >= 5 && string[i] !== 'JavaScript:') {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }

    if (string[i] !== 'as' && string[i] !== 'by' && string[i] !== 'at' &&
    string[i] !== 'for' && string[i] !== 'in' && string[i] !== 'on' &&
    string[i] !== 'per' && string[i] !== 'to' && string[i] !== 'and' &&
    string[i] !== 'the' && string[i] !== 'of') {
      string[i] = string[i][0].toUpperCase() + string[i].substring(1);
    }

    for (let j = 0; j < string[i].length; j++) {
      if (string[i][j] === '-') {
        string[i] = string[i].slice(0, j + 1) + string[i][j + 1].toUpperCase() + string[i].slice(j + 2);
      }

      if (string[i][j] === ':') {
        string[i + 1] = string[i + 1].charAt(0).toUpperCase() + string[i + 1].substring(1);
      }
    }

  }
  string = string.join(' ');
  return string;
}
