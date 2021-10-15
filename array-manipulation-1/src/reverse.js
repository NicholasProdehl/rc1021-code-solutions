/* exported reverse */
function reverse(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[array.length - (i + 1)]);
  }
  return arr;
}

// set up an empty array, then use a for loop to check for every  index of the array
// push the value of array at index (array length - (i + 1))
// It gets the opposite end of the index value at each i value. the extra 1 being
// subtracted is because of the length and index value being staggered by one.
