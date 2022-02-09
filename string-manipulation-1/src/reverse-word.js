/* exported reverseWord */
/*
Function that recieves a word and prints it out in reverse
input word(string) 'car'
output word(string) 'rac'
-create a storage for the reverse of the word
-create a storage to start at the end of the word
-increment backwardsthrough the word
-add each letter to the storage for the reverse word
-give back the word now in reverse
*/
function reverseWord(word) {
  var lengthOfWord = word.length - 1;
  var reverseOfWord = '';
  while (lengthOfWord !== 0) {
    reverseOfWord = reverseOfWord + word[lengthOfWord];
    lengthOfWord--;
  }
  reverseOfWord = reverseOfWord + word[lengthOfWord];
  return reverseOfWord;
}
