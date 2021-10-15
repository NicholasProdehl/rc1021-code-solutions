/* exported toObject */
function toObject(keyValuePair) {
  var arr = {};
  arr[keyValuePair[0]] = keyValuePair[1];
  return arr;
}

// declare the function with it's parameters
// declare an empty object, then set the objects key at keyValuePair's index
// of 0 to keyValuePair's index of 1. the Key is at 0, Value is at 1.
