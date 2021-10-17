/* exported includes */
function includes(array, value) {
  var bool = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      bool = true;
    }
  }
  return bool;
}
