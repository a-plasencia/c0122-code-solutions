/* exported filterOutNulls */
function filterOutNulls(values) {
  var filterNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterNull.push(values[i]);
    }
  }
  return filterNull;
}
