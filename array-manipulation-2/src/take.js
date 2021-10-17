/* exported take */
function take(array, count) {
  var arr = [];
  if (count > array.length) {
    count = array.length;
  } else {
    for (var i = 0; i < count; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
