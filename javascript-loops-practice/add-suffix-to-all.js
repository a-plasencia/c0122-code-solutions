/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addSuffix = [];

  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    addSuffix.push(words[i]);
  }
  return addSuffix;
}
