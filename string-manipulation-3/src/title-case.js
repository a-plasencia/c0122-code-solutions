/* exported titleCase */

/*
Create a function that takes a string and returns an APA Title Case Style
input title (string) 'composing software'
output (string) 'Composing Software'
- Create a variable string that saves the value of the variable title
- Call the toLowerCase method on the string
- Call the split method and split the string into an array wherever there is a space (' ')
- Loop through the list of words in the string array
- If the word is 'javascript' or 'javascript:' capitalize the J and S in JavaScript
- If the word is 'api' capitalize it to 'API'
- If it is the first word in the array capitalize the word
- If the word is greater than or equal to five letters capitzlie the array
- If the word is not one of the "minor words of three letters or fewer" capitalize the word
- Loop through each letter of the word
- If the word has a hyphen (-), capitalize the next letter in the word
- If the word has a colon (:), capitalize the next word in the word array
- Call the join method on the string to turn the array into a string
- Return the string which is now capitalized in APA
*/

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
