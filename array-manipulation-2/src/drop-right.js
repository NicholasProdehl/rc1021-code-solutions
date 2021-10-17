/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = 0; i < array.length - count; i++) {
    arr.push(array[i]);
  }
  return arr;
}
