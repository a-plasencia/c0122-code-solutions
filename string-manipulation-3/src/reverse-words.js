/* exported reverseWords */

/*
Create a function that reverses the words in a sentence
input (string) 'All Code All Day'
output (string)  'llA edoC llA yaD'
-Create an array of the words in a string, as well as an empty array for the new sentence with
the reversed words
-Create a for loop and then go through each of the words in the wordList array
-Create a for loop IN the for loop that loops through each letter  in reverse
-Push each letter into the reverse array
-After the second for loop, IF the next element in the wordList array is not undefined, push a space
-Call the join method to turn the reverseArray back into a string
-Return the reverse array
*/

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
