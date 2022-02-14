/* exported truncate */
/*

*/

function truncate(length, string) {
  var newString = '';
  newString = string.slice(0, length);
  newString = newString + '...';
  return newString;

}
