/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addSuffix = [];

  for (var i = 0; i < words.length; i++) {
    var newWord = '';
    newWord = words[i];
    newWord += suffix;
    addSuffix.push(newWord);
  }
  return addSuffix;
}
