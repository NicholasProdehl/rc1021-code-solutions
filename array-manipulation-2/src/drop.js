/* exported drop */
function drop(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
// set up empty variable for ending outut, set up for loop to start at the
// value of count, and then push the rest of the variables. it drops the first
// amount of count.
