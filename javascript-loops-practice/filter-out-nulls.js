/* exported filterOutNulls */
function filterOutNulls(values) {
  var counter = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      counter.push(values[i]);
    }
  }
  return counter;
}
