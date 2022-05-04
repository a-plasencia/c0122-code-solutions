/* exported reverseWords */

function reverseWords(string) {
  const wordList = string.split(' ');
  let reverseArray = [];
  for (let i = 0; i < wordList.length; i++) {
    for (let j = wordList[i].length - 1; j >= 0; j--) {
      reverseArray.push(wordList[i][j]);
    }
    if (wordList[i + 1] !== undefined) {
      reverseArray.push(' ');
    }
  }
  reverseArray = reverseArray.join('');
  return reverseArray;
}
