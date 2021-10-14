/* exported findIndex */
function findIndex(array, value) {
  var counter;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      counter = i;
      break;
    } else {
      counter = -1;
    }
  }
  return counter;
}
