/* exported chunk */
function chunk(array, size) {
  var arr = [];
  var subArr = [];
  if (size > array.length) {
    size = array.length;
  }
  for (var i = 0; i < array.length; i++) {
    subArr.push(array[i]);
    if (subArr.length === size) {
      arr.push(subArr);
      subArr = [];
    }
  }
  if (subArr.length > 0) {
    arr.push(subArr);
  }
  return arr;
}

// declare final arr and temporary subArr. check if the size is bigger
// than the array itself and set size to the array.length to get rid of problems
// Set a for loop that goes through every index of the array.
// push the array value at i into the temporary array subArr. when it hits the
// size given, push into permanent array arr and reset it. At the end, if there's some
// left inside subArr, push that into arr as well.
// return arr.
