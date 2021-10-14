/* exported getIndexes */
function getIndexes(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array.indexOf(array[i]));
  }
  return arr;
}
